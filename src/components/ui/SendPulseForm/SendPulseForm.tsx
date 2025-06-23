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
      {/* Обновленные стили формы */}
      <style jsx>{`
        .sp-force-hide { 
          display: block !important; /* Временно показываем форму */
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          z-index: 9999 !important;
        }
        .sp-form[sp-id="247350"] { 
          display: block; 
          background: #ffffff; 
          padding: 15px; 
          width: 450px; 
          max-width: 100%; 
          border-radius: 0px; 
          border-color: #dddddd; 
          border-style: solid; 
          border-width: 1px; 
          font-family: Arial, "Helvetica Neue", sans-serif; 
          background-repeat: no-repeat; 
          background-position: center; 
          background-size: auto;
        }
        .sp-form[sp-id="247350"] input[type="checkbox"] { 
          display: inline-block; 
          opacity: 1; 
          visibility: visible;
        }
        .sp-form[sp-id="247350"] .sp-form-fields-wrapper { 
          margin: 0 auto; 
          width: 420px;
        }
        .sp-form[sp-id="247350"] .sp-form-control { 
          background: #ffffff; 
          border-color: #cccccc; 
          border-style: solid; 
          border-width: 1px; 
          font-size: 15px; 
          padding-left: 8.75px; 
          padding-right: 8.75px; 
          border-radius: 0px; 
          height: 35px; 
          width: 100%;
        }
        .sp-form[sp-id="247350"] .sp-field label { 
          color: #444444; 
          font-size: 13px; 
          font-style: normal; 
          font-weight: bold;
        }
        .sp-form[sp-id="247350"] .sp-button-messengers { 
          border-radius: 0px;
        }
        .sp-form[sp-id="247350"] .sp-button { 
          border-radius: 0px; 
          background-color: #084ecf; 
          color: #ffffff; 
          width: 100%; 
          font-weight: 700; 
          font-style: normal; 
          font-family: "Segoe UI", Segoe, "Avenir Next", "Open Sans", sans-serif; 
          box-shadow: none;
        }
        .sp-form[sp-id="247350"] .sp-button-container { 
          text-align: left; 
          width: auto;
        }
      `}</style>

      {/* Обновленная HTML форма - теперь fixed вместо popup */}
      <div className="sp-form-outer sp-fixed-outer sp-force-hide">
        <div 
          id="sp-form-247350" 
          {...{
            'sp-id': '247350',
            'sp-hash': '6867f3e01d57b60bdaf1a84e70d521c87a2633216a80370c44aad80a05bff4fc',
            'sp-lang': 'ua',
            'sp-show-options': '%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A5%2C%22repeat%22%3A1%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22submitRedirectUrl%22%3A%22%22%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3A%22%D0%A4%D0%BE%D1%80%D0%BC%D0%B0_%D0%BF_%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B8_%D0%9D%D0%BE%D0%B2_%D0%BF_%D0%B4%D0%BF%D0%B8%D1%81%D0%BD%D0%B8%D0%BA%D0%B8%22%2C%22send%22%3Afalse%7D%7D%2C%22utmEnable%22%3Afalse%7D'
          }}
          className="sp-form sp-form-regular sp-form-fixed sp-form-fixed__bottom-right"
        >
          <div className="sp-form-fields-wrapper">
            <button className="sp-btn-close">&nbsp;</button>
            <div className="sp-message">
              <div></div>
            </div>
            <form noValidate className="sp-element-container">
              <div 
                className="sp-field sp-field-full-width" 
                {...{'sp-id': 'sp-20449acf-0c23-4b24-bacd-87c80210116e'}}
              >
                <div style={{
                  fontFamily: '"Segoe UI", Segoe, "Avenir Next", "Open Sans", sans-serif',
                  lineHeight: 1.2
                }}>
                  <p style={{textAlign: 'center'}}>
                    Щотижневий огляд рішень, брендів і систем, що формують сучасну фізичну безпеку об&apos;єктів критичної інфраструктури та великого бізнесу.
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
              
              <div 
                className="sp-field" 
                {...{'sp-id': 'sp-283a113b-7019-4dff-9680-0d21449fbdab'}}
              >
                <label className="sp-control-label">
                  <span></span>
                </label>
                <input 
                  type="text" 
                  {...{
                    'sp-type': 'input',
                    'sp-tips': '%7B%7D'
                  }}
                  name="sform[bmFtZQ==]" 
                  className="sp-form-control" 
                  placeholder="Ім&apos;я" 
                  autoComplete="on"
                />
              </div>
              
              <div 
                className="sp-field" 
                {...{'sp-id': 'sp-8fa71a13-0a43-4ef2-973f-dd6de77913fd'}}
              >
                <label className="sp-control-label">
                  <span></span>
                  <strong>*</strong>
                </label>
                <input 
                  type="email" 
                  {...{
                    'sp-type': 'email',
                    'sp-tips': '%7B%22required%22%3A%22%D0%9E%D0%B1%D0%BE%D0%B2%26apos%3B%D1%8F%D0%B7%D0%BA%D0%BE%D0%B2%D0%B5%20%D0%BF%D0%BE%D0%BB%D0%B5%22%2C%22wrong%22%3A%22%D0%9D%D0%B5%D0%B2%D1%96%D1%80%D0%BD%D0%B0%20email-%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0%22%7D'
                  }}
                  name="sform[email]" 
                  className="sp-form-control" 
                  placeholder="Email" 
                  autoComplete="on" 
                  required
                />
              </div>
              
              <div 
                className="sp-field sp-button-container" 
                {...{'sp-id': 'sp-5487a533-b9c5-42e6-bcc8-a538ed459053'}}
              >
                <button 
                  id="sp-5487a533-b9c5-42e6-bcc8-a538ed459053" 
                  className="sp-button"
                >
                  Надсилати щотижня
                </button>
              </div>
            </form>
            <div className="sp-link-wrapper sp-brandname__left"></div>
          </div>
        </div>
      </div>

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

      {/* SendPulse обработчик с правильным URL и версией */}
      <Script
        src="https://web.webformscr.com/apps/fc3/build/default-handler.js?1744699503990"
        strategy="afterInteractive"
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
}