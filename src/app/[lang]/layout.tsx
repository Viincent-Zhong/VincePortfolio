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
    { url : "/images/coding.png", rel: "icon", type: "image/x-icon" },
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
      <body>
          {children}
      </body>
    </html>
  );
}
