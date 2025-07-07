import type { Metadata } from "next";
import { Roboto, DM_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codex",
  description: "Cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
