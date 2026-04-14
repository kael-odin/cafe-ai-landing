import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cafe AI - 企业级智能工作空间",
  description: "Cafe AI 是一款企业级 AI 智能工作空间桌面应用，集成智能对话、浏览器自动化、数字人运营、知识管理等核心能力，让 AI 真正成为你的工作伙伴。",
  keywords: ["AI", "智能助手", "企业级", "工作空间", "Claude", "浏览器自动化", "数字人"],
  authors: [{ name: "Cafe AI Team" }],
  openGraph: {
    title: "Cafe AI - 企业级智能工作空间",
    description: "让 AI 成为你的工作伙伴",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
