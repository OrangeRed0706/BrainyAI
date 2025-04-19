<div align="center">
<img src="https://raw.githubusercontent.com/luyu0279/LynnAI/main/misc/logo.png" width="350px">
</div>

<br>

## Introduction

---

### Project Architecture and Design Philosophy

**LynnAI** is a Chrome browser extension that lets you manage your own API keys through Google authentication. Users can bring the capabilities of large models into their daily work habits and scenarios using LynnAI. With a convenient sidebar, **LynnAI** offers features such as AI chat aggregation, AI search, AI reading, and enhanced AI web browsing.

#### 技術原理
- BrainyAI 會模擬用戶在各 AI 官網的正常網頁請求，利用用戶現有登入狀態（如 Cookie、Token）來代理請求。
- 例如與 Moonshot Kimi 互動時，會自動帶上用戶在 kimi.moonshot.cn 的授權資訊，實現免 API Key、免額外費用的高級功能。
- 用戶可在同一個對話窗口中，同步發問給多個 AI 模型，並即時比較不同 AI 的回答。

#### 主要優勢
- 完全免費，無需額外申請 API Key
- 支援多種頂級 AI 模型，聚合對比更方便
- 保護用戶隱私，所有資料僅存於本地
- 支援網頁摘要、YouTube 摘要、文件對話等豐富功能

---


🧠**LynnAI** is a Chrome browser extension that lets you manage your own API keys through Google authentication. Users can bring the capabilities of large models into their daily work habits and scenarios using LynnAI. With a convenient sidebar, **LynnAI** offers features such as AI chat aggregation, AI search, AI reading, and enhanced AI web browsing.

When using **LynnAI**, users don’t need to leave their current web page. They can leverage advanced large language models like **GPT-4**, **GPT-4o**, **Claude**, **Gemini**, **Moonshot**, and **LLaMA3** for tasks such as conversation, search, summarizing web pages, and reading files—all completely free. LynnAI is a free alternative to similar products like **[Sider AI](https://sider.ai)**, **[Monica](https://monica.im)**, **[Merlin](https://www.getmerlin.in)**, and **[MaxAI](https:///www.maxai.me)**. 🌐


<br>


## Key features

- 🤖 Group Chat with Top-Tier AIs at Once, for Free
- 🔍 Multiple Answers from Top-Tier AI Search Engines, for Free
- 📚 Top-Tier AIs to assist with Web/YouTube summaries, for Free
- 💬 Engage in conversations with Top-Tier AIs across documents, for Free


## Supported LLMs



<br>


## Privacy

LynnAI respects your privacy. Your conversations are stored locally on your device. API keys are securely stored on our servers and are only accessible with your Google account. API calls to AI providers are made through our secure backend to protect your API keys.

## For Developers

### Installation

```bash
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

### Making production(debug) build, which will reserve the logs

Run the following:

```bash
pnpm build:staing
```

### To enable GA4 Measurement protocol

```bash
mv .env.example .env
```

and then add your GA4 Measurement ID and API Secret in the .env file



## Community

<a href="https://discord.gg/FXgVQQwP8s">
    <img src="https://img.shields.io/discord/981138088757690398?label=Discord&logo=discord&logoColor=white&style=for-the-badge" alt="Discord">
</a>
