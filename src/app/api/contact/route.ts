import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validateFormData(data: unknown): data is ContactFormData {
  if (typeof data !== 'object' || data === null) return false;
  
  const { name, email, message } = data as Record<string, unknown>;
  
  if (typeof name !== 'string' || name.trim().length < 2) return false;
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
  if (typeof message !== 'string' || message.trim().length < 10) return false;
  
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validateFormData(body)) {
      return NextResponse.json(
        { success: false, error: 'Невірні дані форми' },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Сайт AViSaT" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Заявка з сайту від ${name}`,
      text: `
Ім'я: ${name}
Email: ${email}

Повідомлення:
${message}
      `.trim(),
      html: `
        <h2>Нова заявка з сайту avisat.com.ua</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <p><strong>Повідомлення:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('=== EMAIL SENT ===');
    console.log('To:', process.env.SMTP_TO);
    console.log('From:', name, email);
    console.log('Timestamp:', new Date().toISOString());
    console.log('==================');

    return NextResponse.json({ 
      success: true, 
      message: 'Повідомлення надіслано' 
    });

  } catch (error) {
    console.error('Email send error:', error);
    
    return NextResponse.json(
      { success: false, error: 'Помилка відправки повідомлення' },
      { status: 500 }
    );
  }
}