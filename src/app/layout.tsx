import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import "./globals.css";
import Header from './component/header';
import Footer from "./component/footer";
import Navbar from "./component/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar /> {/* Navbar Component */}
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
