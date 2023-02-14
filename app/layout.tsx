"use client";

/* eslint-disable @next/next/no-head-element */

import { Inter } from "@next/font/google";
import Link from "next/link";
import { AnalyticsWrapper } from "./analytics";
import "./globals.css";
const inter = Inter({ subsets: ['latin', "cyrillic", "cyrillic-ext", "latin-ext", "greek", "greek-ext"], weight: "700", })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>MultiShare</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
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
