import Header from "@/components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--roboto"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <head>
        <title>Movies Preview</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
