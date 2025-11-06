import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simon Developer",
  description: "Software Engineer Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
