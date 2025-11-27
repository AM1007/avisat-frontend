'use client';

import type { IziToastSettings } from 'izitoast';

const baseConfig: Partial<IziToastSettings> = {
  position: 'topRight',
  timeout: 5000,
  transitionIn: 'fadeInDown',
  transitionOut: 'fadeOutUp',
  progressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
};

const loadIziToast = async () => {
  if (typeof window === 'undefined') return null;
  const iziToast = await import('izitoast');
  return iziToast;
};

export const toast = {
  success: async (message: string, title = 'Успішно') => {
    const iziToast = await loadIziToast();
    if (!iziToast) return;
    
    iziToast.success({
      ...baseConfig,
      title,
      message,
      backgroundColor: '#171717',
      titleColor: '#ffffff',
      messageColor: '#ffffff',
      iconColor: '#22c55e',
      progressBarColor: '#22c55e',
    });
  },

  error: async (message: string, title = 'Помилка') => {
    const iziToast = await loadIziToast();
    if (!iziToast) return;
    
    iziToast.error({
      ...baseConfig,
      title,
      message,
      timeout: 7000,
      backgroundColor: '#171717',
      titleColor: '#ffffff',
      messageColor: '#ffffff',
      iconColor: '#FF0000',
      progressBarColor: '#FF0000',
    });
  },
};

export default toast;