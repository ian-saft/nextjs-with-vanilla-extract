import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '700'],
  variable: '--nunito-font',
});

export const fonts = {
  nunito: nunito.className,
};
