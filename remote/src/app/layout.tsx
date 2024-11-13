import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remote",
  description: "Do remote work and get paid in crypto!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
