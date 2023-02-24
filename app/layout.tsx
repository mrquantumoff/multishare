import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";
import { AnalyticsWrapper } from "./analytics";
import "./globals.css";
const inter = Inter({ subsets: ['latin', "cyrillic", "cyrillic-ext", "latin-ext", "greek", "greek-ext"], weight: "700", })
export const metadata: Metadata = {
  title: "MultiShare",
  description: "MultiShare by Demir Yerli",
  icons: { icon: "/logo.png" }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={`${inter.className}`}>
        <div className="center">
          {children}
          <p className="copyright">Powered by MultiShare. Copyright © 2023, <Link href="https://mrquantumoff.dev">Demir Yerli.</Link></p>
          <AnalyticsWrapper></AnalyticsWrapper>
        </div>
      </body>
    </html>
  );
}
