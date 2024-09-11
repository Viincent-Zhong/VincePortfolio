import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vincent Zhong",
  description: "Vincent Zhong's portfolio",
  icons: [
    { url : "/images/coding.png", rel: "icon", type: "image/x-icon" },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
