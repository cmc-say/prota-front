"use client";

import { useLayoutEffect } from "react";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const routerMapper = (path: string) => {
    switch (path) {
      case "MY_WORLD":
        router.push("/world/my-world");
        break;
      case "HOME":
        router.push("/home");
        break;
      case "SEARCH_WORLD":
        router.push("/world/search");
        break;
      case "MY_PAGE":
        router.push("/mypage");
        break;
      default:
        router.push("/home");
        break;
    }
  };

  useLayoutEffect(() => {
    const pathHandler = (e: any) => {
      routerMapper(JSON.parse(e.data)["path"]);
    };

    window.addEventListener("message", pathHandler);
    document.addEventListener("message", pathHandler);

    return () => {
      window.removeEventListener("message", pathHandler);
      document.removeEventListener("message", pathHandler);
    };
  }, []);

  return (
    <html lang="en">
      <head />
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </html>
  );
}
