import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marco Paiva | Full Stack Developer",
  description: "I build fast, modern websites that help businesses attract more customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                  }
                });
              }, observerOptions);

              document.addEventListener('DOMContentLoaded', () => {
                const revealElements = document.querySelectorAll('.reveal');
                revealElements.forEach(el => observer.observe(el));
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
