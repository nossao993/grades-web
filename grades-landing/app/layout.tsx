import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grades - Зарплаты в IT 2025",
  description: "Компании скрывают зарплаты, а мы - нет. Тысячи реальных зарплат из IT: разработчики, дизайнеры, менеджеры, аналитики. Сравни свою зарплату с другими и узнай сколько платят на рынке в 2025 году.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
