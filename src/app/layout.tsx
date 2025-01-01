import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Klothink",
  description: "Developed by Vusal Alakbarov",
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: Readonly<IRootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {props.children}
      </body>
    </html>
  );
}
