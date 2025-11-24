'use client';

import { useState, FormEvent } from 'react';
import Modal from '../Modal/Modal';
import { useModal } from '@/context/ModalContext';
import styles from './ContactModal.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactModal() {
  const { isOpen, closeModal } = useModal();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Валидация формы
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Имя: обязательное, минимум 2 символа
    if (!formData.name.trim()) {
      newErrors.name = "Ім'я є обов'язковим";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Ім'я має містити мінімум 2 символи";
    }

    // Email: обязательное, формат email
    if (!formData.email.trim()) {
      newErrors.email = "Email є обов'язковим";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Невірний формат email";
    }

    // Сообщение: обязательное, минимум 10 символов
    if (!formData.message.trim()) {
      newErrors.message = "Тема повідомлення є обов'язковою";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Тема має містити мінімум 10 символів";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработка изменения полей
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очистка ошибки при изменении поля
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Обработка отправки формы
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Заглушка отправки
    console.log('Form submitted:', {
      to: 'info@avisat.com.ua',
      ...formData
    });

    // Имитация отправки
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Дякуємо! Ваше повідомлення надіслано.');
      
      // Сброс формы
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      closeModal();
    }, 1000);
  };

  // Сброс формы при закрытии
  const handleClose = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    closeModal();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={handleClose}
      title="Зв'яжіться з нами"
    >
      <div className={styles.formWrapper}>
        <p className={styles.description}>
          Заповніть форму, і наш фахівець звяжеться з вами найближчим часом
        </p>

        <div className={styles.form}>
          {/* Имя */}
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>
              Ім&apos;я та прізвище *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              placeholder="Введіть ваше ім'я"
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              placeholder="example@mail.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          {/* Сообщение */}
          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.label}>
              Тема повідомлення *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              placeholder="Опишіть вашу потребу або питання"
              rows={5}
              disabled={isSubmitting}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}
          </div>

          {/* Кнопка отправки */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? 'Відправка...' : 'Відправити'}
          </button>
        </div>
      </div>
    </Modal>
  );
}