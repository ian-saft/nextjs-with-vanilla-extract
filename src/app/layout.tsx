import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { fonts } from '@styles/fonts';
import '@styles/global.css';

export const metadata: Metadata = {
  title: 'Next.js 13 | Vanilla Extract',
  description: 'Next base project with Vanilla Extract',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={fonts.nunito}>
      <body>{children}</body>
    </html>
  );
}
