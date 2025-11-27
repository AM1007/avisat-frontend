import { NextRequest, NextResponse } from 'next/server';

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

    // ============================================
    // SMTP ЗАГЛУШКА — раскомментировать когда будут креды
    // ============================================
    
    /*
    import nodemailer from 'nodemailer';
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Заявка з сайту від ${name}`,
      text: `
        Ім'я: ${name}
        Email: ${email}
        
        Повідомлення:
        ${message}
      `,
      html: `
        <h2>Нова заявка з сайту avisat.com.ua</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Повідомлення:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // ВРЕМЕННО: логируем в консоль сервера
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('================================');

    return NextResponse.json({ 
      success: true, 
      message: 'Повідомлення отримано' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { success: false, error: 'Помилка сервера' },
      { status: 500 }
    );
  }
}