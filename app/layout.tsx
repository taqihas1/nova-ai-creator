import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova AI Creator",
  description: "Your AI executive team for research, creativity, marketing and growth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
