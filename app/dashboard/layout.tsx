import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaS Dashboard",
  description: "SaaS Analytics Dashboard Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}