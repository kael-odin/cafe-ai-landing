"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Sparkles,
  Brain,
  Globe,
  Bot,
  FileText,
  Zap,
  ChevronRight,
  Terminal,
  Layers,
  MessageSquare,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">
      {/* Oil painting background image */}
      <OilPaintingBackground />

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <Header />

        {/* Hero section */}
        <HeroSection />

        {/* Features section */}
        <FeaturesSection />

        {/* Tech section */}
        <TechSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with brand icon */}
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logo.png"
              alt="Cafe AI"
              className="h-9 w-9 rounded-lg object-contain"
            />
            <span className="text-lg font-semibold tracking-tight">
              Cafe AI
            </span>
            <span className="ml-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-400 border border-amber-500/20">
              v2.1
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
              功能特性
            </a>
            <a href="#tech" className="text-sm text-white/60 hover:text-white transition-colors">
              技术架构
            </a>
            <a
              href="https://github.com/nicekate/cafe-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>

          {/* Mobile menu */}
          <a
            href="https://github.com/nicekate/cafe-ai"
            target="_blank"
            rel="noreferrer"
            className="md:hidden inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm backdrop-blur-sm"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-white/80">企业级 AI 智能工作空间</span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <span className="gradient-text">让 AI 成为</span>
            <br />
            <span className="text-white">你的工作伙伴</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed">
            Cafe AI 是一款功能强大的桌面应用，集成智能对话、浏览器自动化、
            <br className="hidden sm:block" />
            数字人运营、知识管理等核心能力，重新定义人机协作方式。
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/nicekate/cafe-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0a0d12] shadow-lg shadow-white/10 transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-white/20"
            >
              <Github className="h-5 w-5" />
              查看源码
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
            >
              了解更多
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "6+", label: "核心模块" },
              { value: "10+", label: "AI 模型支持" },
              { value: "100%", label: "本地运行" },
              { value: "开源", label: "完全免费" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "智能对话引擎",
      description: "基于 Claude Agent SDK 构建，支持多模型路由、身份伪装、上下文记忆，实现真正理解你意图的 AI 对话体验。",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      icon: Globe,
      title: "AI 浏览器自动化",
      description: "集成 Puppeteer 浏览器控制，AI 自主完成网页操作、数据采集、表单填写，解放双手让 AI 替你浏览。",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
    {
      icon: Bot,
      title: "数字人运营系统",
      description: "内置数字人管理模块，支持多平台账号运营、内容生成、互动管理，打造你的 AI 数字分身。",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      icon: Brain,
      title: "知识管理中心",
      description: "本地知识库存储、智能检索、向量索引，让 AI 记住你的项目、文档、笔记，越用越懂你。",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400",
    },
    {
      icon: Layers,
      title: "MCP 协议集成",
      description: "原生支持 Model Context Protocol，无缝连接 Claude Desktop、Cursor 等 MCP 生态工具。",
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-500/30",
      iconColor: "text-rose-400",
    },
    {
      icon: Zap,
      title: "技能系统",
      description: "基于 OpenClaw 运行时的技能系统，自定义 AI 工作流、自动化脚本，扩展无限可能。",
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section id="features" className="relative py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-white/80">核心能力</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            一站式 AI 工作空间
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            六大核心模块协同工作，构建完整的 AI 辅助工作流
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.06] hover:border-white/20"
            >
              {/* Icon */}
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} border ${feature.borderColor}`}>
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechSection() {
  const techStack = [
    { name: "Electron", description: "跨平台桌面应用框架" },
    { name: "React", description: "现代化 UI 组件库" },
    { name: "TypeScript", description: "类型安全的开发体验" },
    { name: "Node.js", description: "高性能后端运行时" },
    { name: "Claude SDK", description: "Anthropic AI 能力集成" },
    { name: "Puppeteer", description: "浏览器自动化引擎" },
    { name: "OpenClaw", description: "技能系统运行时" },
    { name: "MCP", description: "模型上下文协议" },
  ];

  return (
    <section id="tech" className="relative py-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm mb-6">
            <Terminal className="h-4 w-4 text-amber-400" />
            <span className="text-white/80">技术架构</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            现代化技术栈
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            基于成熟的开源生态，构建稳定可靠的 AI 工作平台
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm transition-all hover:bg-white/[0.06] hover:border-white/20"
            >
              <div className="text-lg font-semibold mb-1">{tech.name}</div>
              <div className="text-xs text-white/40">{tech.description}</div>
            </div>
          ))}
        </div>

        {/* Architecture diagram placeholder */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">系统架构</h3>
            <p className="text-white/50">模块化设计，各组件独立运行又紧密协作</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-4">
              <div className="text-sm font-medium text-white/60">用户界面层</div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm">React + TypeScript</div>
                <div className="text-xs text-white/40 mt-1">响应式 UI 组件</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-sm font-medium text-white/60">核心服务层</div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm">Electron Main Process</div>
                <div className="text-xs text-white/40 mt-1">AI 引擎 + 浏览器控制</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-sm font-medium text-white/60">数据存储层</div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm">Local Storage + Vector DB</div>
                <div className="text-xs text-white/40 mt-1">知识库 + 会话记忆</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo with brand icon */}
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logo.png"
              alt="Cafe AI"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="text-lg font-semibold">Cafe AI</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nicekate/cafe-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://github.com/nicekate/cafe-ai/blob/main/README.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <FileText className="h-4 w-4" />
              文档
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/40">
            © 2024 Cafe AI Team. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function OilPaintingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Real oil painting background image */}
      <img
        src="/images/landing-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      
      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.5) 100%)",
        }}
      />
    </div>
  );
}
