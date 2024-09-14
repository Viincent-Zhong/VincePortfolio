import type { Metadata } from "next";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

export const metadata: Metadata = {
  title: "Vincent Zhong",
  description: "Vincent Zhong's portfolio",
  icons: [
    { url : "/images/coding.png", rel: "icon", type: "image/x-icon" },
  ]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
