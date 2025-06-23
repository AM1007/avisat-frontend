// src/components/ui/SendPulseForm/SendPulseForm.tsx
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function SendPulseForm() {
  useEffect(() => {
    // Можно добавить логику инициализации если нужно
  }, []);

  // Обработчики определяем внутри компонента
  const handleLoad = () => {
    console.log('SendPulse форма успешно загружена');
    
    // Добавляем отладку
    setTimeout(() => {
      const form = document.getElementById('sp-form-247350');
      const container = document.querySelector('.sp-form-outer');
      
      console.log('Форма найдена:', !!form);
      console.log('Контейнер найден:', !!container);
      console.log('SPFormApi доступен:', !!window.SPFormApi);
      
      if (container) {
        console.log('Классы контейнера:', container.className);
        console.log('Стили контейнера:', window.getComputedStyle(container).display);
      }
    }, 1000);
  };

  const handleError = (error: Error | Event) => {
    console.error('Ошибка загрузки SendPulse формы:', error);
  };

  return (
    <>
      {/* Убираем сложные стили, оставляем простые */}
      <style jsx>{`
        #sendpulse-form-container {
          /* Пустой контейнер для loader.js */
        }
      `}</style>

      {/* Простой контейнер для loader.js */}
      <div id="sendpulse-form-container"></div>

      {/* Принудительная инициализация формы */}
      <Script id="sendpulse-force-init" strategy="afterInteractive">
        {`
          setTimeout(function() {
            try {
              // Убираем класс sp-force-hide принудительно
              var formOuter = document.querySelector('.sp-form-outer');
              if (formOuter) {
                formOuter.classList.remove('sp-force-hide');
                console.log('Класс sp-force-hide удален');
              }
              
              // Пытаемся инициализировать форму если API доступен
              if (window.SPFormApi?.show) {
                window.SPFormApi.show('247350');
                console.log('Форма принудительно показана');
              }
            } catch (e) {
              console.error('Ошибка инициализации формы:', e);
            }
          }, 2000);
        `}
      </Script>

      {/* Добавляем HTML-тег скрипта после Script компонента */}
      <Script id="sendpulse-manual" strategy="afterInteractive">
        {`
          // Создаем script элемент вручную
          setTimeout(function() {
            var script = document.createElement('script');
            script.src = 'https://web.webformscr.com/apps/fc3/build/loader.js';
            script.setAttribute('sp-form-id', '6867f3e01d57b60bdaf1a84e70d521c87a2633216a80370c44aad80a05bff4fc');
            script.async = true;
            document.body.appendChild(script);
            console.log('Manual script добавлен');
          }, 1000);
        `}
      </Script>

      {/* SendPulse - пробуем без кастомных атрибутов */}
      <Script
        id="sendpulse-loader"
        src="https://web.webformscr.com/apps/fc3/build/loader.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
}