// src/types/sendpulse.d.ts

declare global {
  interface Window {
    SPFormApi?: {
      show: (formId: string) => void;
      hide: (formId: string) => void;
      init?: () => void;
      config?: Record<string, string | number | boolean>;
      forms?: Record<string, unknown>;
      // Индексная сигнатура с конкретными типами функций
      [key: string]: 
        | string 
        | number 
        | boolean 
        | (() => void)
        | ((id: string) => void)
        | ((data: unknown) => unknown)
        | Record<string, unknown>
        | undefined;
    };
  }
}

export {};