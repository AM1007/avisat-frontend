// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Включить Cache Components для будущего fullstack
  cacheComponents: true,
  
  // Турбопак уже по умолчанию, но можно явно указать
  turbopack: {
    // настройки если нужны
  }
};

export default nextConfig;