# Browser Tools MCP 项目文档

## 项目概述

BrowserTools MCP 是一个强大的浏览器监控和交互工具，通过 Anthropic 的模型上下文协议（Model Context Protocol，MCP）使人工智能应用能够捕获和分析浏览器数据。该项目由 Chrome 扩展、Node 服务器和 MCP 服务器三个核心组件组成，能够帮助 AI 工具与浏览器进行更高效、更深入的交互。

## 项目架构

该项目由三个核心组件组成：

1. **Chrome 扩展**：一个浏览器扩展，用于捕获截图、控制台日志、网络活动和 DOM 元素。
2. **Node 服务器**：一个中间服务器，负责 Chrome 扩展和 MCP 服务器实例之间的通信。
3. **MCP 服务器**：一个模型上下文协议服务器，为 AI 客户端提供与浏览器交互的标准化工具。

```
┌─────────────┐     ┌──────────────┐     ┌───────────────┐     ┌─────────────┐
│  MCP 客户端 │ ──► │  MCP 服务器  │ ──► │  Node 服务器  │ ──► │   Chrome    │
│  (如 Cursor)│ ◄── │ (协议处理器) │ ◄── │  (中间件)     │ ◄── │   扩展      │
└─────────────┘     └──────────────┘     └───────────────┘     └─────────────┘
```

### 各组件详解

#### Chrome 扩展

- 监控 XHR 请求/响应和控制台日志
- 跟踪选中的 DOM 元素
- 将所有日志和当前元素发送到 BrowserTools 连接器
- 连接到 Websocket 服务器以捕获/发送截图
- 允许用户配置令牌/截断限制和截图文件夹路径

#### Node 服务器

- 作为 Chrome 扩展和 MCP 服务器之间的中间件
- 接收来自 Chrome 扩展的日志和当前选中的元素
- 处理来自 MCP 服务器的请求，以捕获日志、截图或当前元素
- 向 Chrome 扩展发送 Websocket 命令以捕获截图
- 智能截断字符串和日志中重复对象的数量，以避免超出令牌限制
- 移除 cookies 和敏感头信息，避免将其发送到 MCP 客户端中的 LLM

#### MCP 服务器

- 实现模型上下文协议
- 为 AI 客户端提供标准化工具
- 兼容各种 MCP 客户端（Cursor、Cline、Zed、Claude Desktop 等）

## 功能特点

BrowserTools MCP 提供了多种强大的功能：

### 核心功能

- 监控浏览器控制台输出
- 捕获网络流量
- 截取网页截图
- 分析选中的 DOM 元素
- 清除存储在 MCP 服务器中的日志

### 审计工具

#### 1. 无障碍审计
确保网页符合 WCAG 等无障碍标准。

#### 2. 性能审计
识别性能瓶颈和加载问题。

#### 3. SEO 审计
评估网页对搜索引擎的优化程度。

#### 4. 最佳实践审计
检查网页开发的一般最佳实践。

#### 5. NextJS 审计
检查 NextJS 应用程序的最佳实践和 SEO 改进。

#### 6. 审计模式
按特定顺序运行所有审计工具。

#### 7. 调试模式
按特定顺序运行所有调试工具。

## 安装指南

要运行此 MCP 工具，需要安装三个组件：

1. 安装 Chrome 扩展：[v1.2.0 BrowserToolsMCP Chrome Extension](https://github.com/AgentDeskAI/browser-tools-mcp/releases/download/v1.2.0/BrowserTools-1.2.0-extension.zip)

2. 在 IDE 中安装 MCP 服务器：
   ```
   npx @agentdeskai/browser-tools-mcp@latest
   ```

3. 打开新的终端窗口并运行：
   ```
   npx @agentdeskai/browser-tools-server@latest
   ```

安装完成后，打开 Chrome 开发者工具，然后打开 BrowserToolsMCP 面板。

## 使用方法

一旦安装并配置完成，系统允许任何兼容的 MCP 客户端执行以下操作：

### 基本操作

- 监控浏览器控制台输出
- 捕获网络流量
- 截取屏幕截图
- 分析选中的元素
- 清除 MCP 服务器中存储的日志

### 审计命令示例

#### 无障碍审计
> - "检查这个页面有没有无障碍问题？"
> - "运行无障碍审计。"

#### 性能审计
> - "为什么这个页面加载这么慢？"
> - "检查这个页面的性能。"

#### SEO 审计
> - "如何改善这个页面的 SEO？"
> - "运行 SEO 审计。"

#### 最佳实践审计
> - "运行最佳实践审计。"
> - "检查这个页面的最佳实践。"

#### 审计模式
> - "运行审计模式。"
> - "进入审计模式。"

#### NextJS 审计
> - "运行 NextJS 审计。"
> - "运行 NextJS 审计，我正在使用 app router。"

#### 调试模式
> - "进入调试模式。"

## 兼容性

- 适用于任何 MCP 兼容的客户端
- 主要为 Cursor IDE 集成设计
- 支持其他 AI 编辑器和 MCP 客户端

## 故障排除

如果遇到连接问题，请尝试以下步骤：
- 完全退出/关闭浏览器，不仅仅是窗口，而是所有 Chrome 进程
- 重启本地 Node 服务器（browser-tools-server）
- 确保只有一个 Chrome 开发者工具面板打开

如果仍然有问题，可以在 GitHub 上提交 issue 票据寻求帮助。

## 版本更新

当前版本 v1.2.0 的主要更新：
- 启用"允许自动粘贴到 Cursor"功能，截图将自动粘贴到 Cursor 中
- 通过 Lighthouse 集成了 SEO、性能、无障碍和最佳实践分析工具
- 实现了针对 NextJS 应用程序的特定提示，用于改进 SEO
- 添加了调试模式和审计模式工具
- 解决了 Windows 连接问题
- 改进了 BrowserTools 服务器、扩展和 MCP 服务器之间的网络连接
- 添加了使用 Ctrl+C 更容易退出 Browser Tools 服务器的功能

## 项目路线图

查看完整的项目路线图：[Github Roadmap / Project Board](https://github.com/orgs/AgentDeskAI/projects/1/views/1)

## 更多信息

有关完整的安装、快速入门和贡献指南，请阅读[官方文档](https://browsertools.agentdesk.ai/)。

如果有任何问题或建议，请随时在 GitHub 上提交 issue 或联系 [@tedx_ai on x](https://x.com/tedx_ai)。 