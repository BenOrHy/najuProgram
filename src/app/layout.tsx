import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '상등상등한 julranamdo NAJU calendar',
  description: '나주 지역 일정 및 캘린더 페이지',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
