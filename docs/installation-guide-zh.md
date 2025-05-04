# BrowserTools MCP 安装指南

本指南将帮助您设置和安装 BrowserTools MCP，这是一个强大的浏览器监控和交互工具，通过 Anthropic 的模型上下文协议（MCP）使 AI 应用能够捕获和分析浏览器数据。

## 系统要求

在开始安装之前，请确保您的系统满足以下要求：

- Node.js 14.x 或更高版本
- Chrome 浏览器（最新版本推荐）
- 兼容的 MCP 客户端（如 Cursor、Claude Desktop、Cline 或 Zed）

## 安装步骤

BrowserTools MCP 由三个主要组件组成，您需要按顺序安装所有组件：

### 1. 安装 Chrome 扩展

1. 下载最新版本的 Chrome 扩展：[BrowserToolsMCP Chrome Extension](https://github.com/AgentDeskAI/browser-tools-mcp/releases/download/v1.2.0/BrowserTools-1.2.0-extension.zip)
2. 解压下载的 ZIP 文件
3. 打开 Chrome 浏览器，导航至 `chrome://extensions/`
4. 启用右上角的"开发者模式"
5. 点击"加载已解压的扩展程序"按钮
6. 选择您解压的扩展文件夹
7. 确认扩展已成功安装并显示在扩展列表中

### 2. 安装 MCP 服务器

在您的集成开发环境（IDE）中，执行以下命令来安装 MCP 服务器：

```bash
npx @agentdeskai/browser-tools-mcp@latest
```

不同的 IDE 可能有不同的配置要求：

#### Cursor IDE 配置

1. 打开 Cursor IDE
2. 进入设置 > MCP
3. 添加新的 MCP 命令：`npx @agentdeskai/browser-tools-mcp@latest`
4. 保存设置

#### Claude Desktop 配置

1. 打开 Claude Desktop
2. 进入设置 > 插件
3. 点击"添加新插件"
4. 输入命令：`npx @agentdeskai/browser-tools-mcp@latest`
5. 保存设置

### 3. 启动 Node 服务器

打开一个新的终端窗口，运行以下命令来启动 BrowserTools 服务器：

```bash
npx @agentdeskai/browser-tools-server@latest
```

保持此终端窗口打开，不要关闭它，直到您完成使用 BrowserTools MCP。

## 验证安装

安装完成后，请按照以下步骤验证所有组件是否正确安装和连接：

1. 打开 Chrome 浏览器，导航到任意网页
2. 打开 Chrome 开发者工具（按 F12 或右键点击 > 检查）
3. 在开发者工具中找到并点击 "BrowserToolsMCP" 面板
4. 验证面板是否显示 "已连接到 BrowserTools 服务器" 的消息
5. 在您的 MCP 客户端（如 Cursor）中，尝试一个简单的命令，例如 "截取当前页面的截图"

如果所有步骤都成功，您现在可以开始使用 BrowserTools MCP 了！

## 常见问题排除

如果您在安装或使用过程中遇到问题，请尝试以下解决方案：

### 连接问题

如果 Chrome 扩展无法连接到 BrowserTools 服务器：

1. 确保 BrowserTools 服务器正在运行（在终端中）
2. 完全关闭 Chrome 浏览器（不仅仅是窗口，而是所有 Chrome 进程）
3. 重新启动 BrowserTools 服务器
4. 重新打开 Chrome 并再次尝试

### 多个 DevTools 问题

确保只打开一个 Chrome 开发者工具面板。多个开发者工具实例可能会导致连接问题。

### 端口占用问题

如果端口（默认为 3000）已被占用：

```bash
npx @agentdeskai/browser-tools-server@latest --port 3001
```

然后在扩展面板中更新端口设置。

### Windows 特定问题

在 Windows 上，如果遇到 WebSocket 连接问题：

1. 确保没有防火墙阻止连接
2. 尝试以管理员身份运行命令提示符或 PowerShell
3. 使用 `localhost` 而不是 `127.0.0.1` 作为主机地址

## 更新 BrowserTools MCP

要更新到最新版本，只需重新运行安装命令：

```bash
npx @agentdeskai/browser-tools-mcp@latest
npx @agentdeskai/browser-tools-server@latest
```

对于 Chrome 扩展，请下载最新版本，删除旧版本，然后安装新版本。

## 卸载

要卸载 BrowserTools MCP：

1. 从 Chrome 中移除扩展程序
2. 停止运行 BrowserTools 服务器（Ctrl+C 在终端中）
3. 从您的 IDE MCP 设置中移除 MCP 命令

## 获取帮助

如果您需要更多帮助，请参考以下资源：

- [官方文档](https://browsertools.agentdesk.ai/)
- [GitHub 问题跟踪器](https://github.com/AgentDeskAI/browser-tools-mcp/issues)
- [Twitter 支持](https://x.com/tedx_ai)

感谢您安装 BrowserTools MCP！ 