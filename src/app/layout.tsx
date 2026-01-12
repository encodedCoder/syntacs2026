import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "SYNTACS 2026",
  description: "Symposium on Novel Technologies and Advances in Computer Science at IIT Ropar, March 20-21, 2026.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SYNTACS 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
