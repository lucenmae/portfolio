'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from 'lenis/react';
import { FC, PropsWithChildren } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ReactLenis>
  );
};

export default RootLayout;
