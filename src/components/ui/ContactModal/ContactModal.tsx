'use client';

import { useState, FormEvent } from 'react';
import Modal from '../Modal/Modal';
import { useModal } from '@/context/ModalContext';
import toast from '@/lib/toast';
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ім'я є обов'язковим";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Ім'я має містити мінімум 2 символи";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email є обов'язковим";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Невірний формат email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Тема повідомлення є обов'язковою";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Тема має містити мінімум 10 символів";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Ми зв\'яжемося з вами найближчим часом', 'Заявку надіслано');
        resetForm();
        closeModal();
      } else {
        toast.error(result.error || 'Не вдалося надіслати повідомлення');
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Перевірте з\'єднання з інтернетом', 'Помилка мережі');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    resetForm();
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
          Заповніть форму, і наш фахівець зв&#39;яжеться з вами найближчим часом
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
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

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? 'Відправка...' : 'Відправити'}
          </button>
        </form>
      </div>
    </Modal>
  );
}