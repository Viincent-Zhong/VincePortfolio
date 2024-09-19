import type { Metadata } from "next";
import "./globals.css";
import { i18n, type Locale } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Vincent Zhong Portfolio",
  description: "Vincent Zhong's portfolio",
  icons: [
    { url : "/images/logo.png", rel: "icon", type: "image/x-icon" },
  ]
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {

  return (
    <html lang={params.lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
