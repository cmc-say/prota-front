"use client";

import "./globals.css";
import { RecoilRoot } from "recoil";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </html>
  );
}
