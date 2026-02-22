import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Women in Leadership · ACE — Association for CX Excellence",
  description:
    "ACE presents Women in Leadership — a half-day event for CX professionals. Conversations that elevate the profession. A community that raises the standard.",
  openGraph: {
    title: "Women in Leadership · ACE",
    description: "April 10, 2025 · Toronto, Ontario · In-Person & Virtual",
    siteName: "ACE — Association for CX Excellence",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
