'use client';

import { useState } from 'react';

interface ContactFormProps {
  onSubmit?: (phone: string) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(phone);
    }
    // Здесь можно добавить логику отправки формы
    console.log('Phone submitted:', phone);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input
          type="tel"
          placeholder="Ваш +38 та мобільний телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white p-3 hover:bg-red-600 transition-colors font-semibold"
      >
        ОТРИМАТИ КОНСУЛЬТАЦІЮ
      </button>
    </form>
  );
}