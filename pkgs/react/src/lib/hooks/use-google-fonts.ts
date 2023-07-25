import { useEffect } from 'react';
import { type Themes } from '../theme/kit.css';

export function useGoogleFont(font: string) {
  useEffect(() => {
    if (!font) return;
    const selectedFont = font.replace(/ /g, '+');

    const googleapis = document.createElement('link');
    googleapis.href = `https://fonts.googleapis.com`;
    googleapis.rel = 'preconnect';

    const gstatic = document.createElement('link');
    gstatic.href = `https://fonts.gstatic.com`;
    gstatic.rel = 'preconnect';
    gstatic.crossOrigin = 'true';

    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont}:wght@400;500;600&display=swap`;
    link.rel = 'stylesheet';

    document.head.appendChild(googleapis);
    document.head.appendChild(gstatic);
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(googleapis);
      document.head.removeChild(gstatic);
      document.head.removeChild(link);
    };
  }, [font]);
}

export function useThemeFont(theme: Themes) {
  const themeFonts: Record<Themes, string> = {
    base: 'Inter',
    light: 'Inter',
    dark: 'Inter',
  };
  const font: string | null = themeFonts[theme] ?? null;
  useGoogleFont(font ?? '');
}
