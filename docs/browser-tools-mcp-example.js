/**
 * BrowserTools MCP 使用示例
 * 本文件展示了如何使用 BrowserTools MCP 进行浏览器交互
 * @author BrowserTools MCP 团队
 */

/**
 * 初始化 BrowserTools MCP 客户端连接
 * @param {Object} options - 连接配置选项
 * @param {string} options.serverUrl - 服务器 URL
 * @param {number} options.port - 连接端口
 * @returns {Promise<Object>} - 返回客户端连接对象
 */
async function initBrowserToolsClient(options = { serverUrl: 'http://localhost', port: 3000 }) {
  console.log('正在连接到 BrowserTools 服务器...');
  return {
    connected: true,
    serverUrl: options.serverUrl,
    port: options.port
  };
}

/**
 * 获取当前页面的截图
 * @param {Object} client - BrowserTools 客户端连接
 * @param {boolean} [fullPage=false] - 是否截取整个页面
 * @returns {Promise<string>} - 返回截图的 base64 编码
 */
async function captureScreenshot(client, fullPage = false) {
  console.log(`正在截取${fullPage ? '全页面' : '可视区域'}截图...`);
  return 'base64_encoded_screenshot_data';
}

/**
 * 获取当前页面的控制台日志
 * @param {Object} client - BrowserTools 客户端连接
 * @param {number} [limit=100] - 返回的日志条数限制
 * @returns {Promise<Array>} - 返回日志数组
 */
async function getConsoleLogs(client, limit = 100) {
  console.log(`正在获取最近 ${limit} 条控制台日志...`);
  return [
    { type: 'log', message: '页面已加载', timestamp: Date.now() },
    { type: 'error', message: '资源加载失败', timestamp: Date.now() }
  ];
}

/**
 * 获取当前页面的网络请求
 * @param {Object} client - BrowserTools 客户端连接
 * @param {number} [limit=50] - 返回的请求条数限制
 * @returns {Promise<Array>} - 返回网络请求数组
 */
async function getNetworkRequests(client, limit = 50) {
  console.log(`正在获取最近 ${limit} 条网络请求...`);
  return [
    { 
      url: 'https://example.com/api/data', 
      method: 'GET',
      status: 200,
      type: 'xhr',
      timestamp: Date.now()
    }
  ];
}

/**
 * 获取当前选中的 DOM 元素
 * @param {Object} client - BrowserTools 客户端连接
 * @returns {Promise<Object>} - 返回元素信息
 */
async function getSelectedElement(client) {
  console.log('正在获取当前选中的 DOM 元素...');
  return {
    tagName: 'div',
    id: 'main-content',
    className: 'container',
    innerHTML: '<p>示例内容</p>'
  };
}

/**
 * 运行网页性能审计
 * @param {Object} client - BrowserTools 客户端连接
 * @returns {Promise<Object>} - 返回审计结果
 */
async function runPerformanceAudit(client) {
  console.log('正在运行性能审计...');
  return {
    score: 85,
    metrics: {
      firstContentfulPaint: '1.2s',
      timeToInteractive: '3.5s',
      speedIndex: '2.8s'
    },
    opportunities: [
      { description: '压缩图片可以节省 500KB', savings: '500KB' },
      { description: '移除未使用的 JavaScript', savings: '250KB' }
    ]
  };
}

/**
 * 运行 SEO 审计
 * @param {Object} client - BrowserTools 客户端连接
 * @returns {Promise<Object>} - 返回审计结果
 */
async function runSEOAudit(client) {
  console.log('正在运行 SEO 审计...');
  return {
    score: 92,
    passes: [
      '页面有描述性的标题',
      '所有图片都有 alt 属性'
    ],
    failures: [
      '页面缺少 meta description',
      '一些链接没有描述性文本'
    ]
  };
}

/**
 * 运行无障碍审计
 * @param {Object} client - BrowserTools 客户端连接
 * @returns {Promise<Object>} - 返回审计结果
 */
async function runAccessibilityAudit(client) {
  console.log('正在运行无障碍审计...');
  return {
    score: 78,
    passes: [
      '页面有正确的标题层次结构',
      '按钮有可访问的名称'
    ],
    violations: [
      '对比度不足',
      '表单字段缺少标签'
    ]
  };
}

/**
 * 演示如何使用 BrowserTools MCP
 * @returns {Promise<void>}
 */
async function demo() {
  try {
    // 初始化客户端
    const client = await initBrowserToolsClient();
    console.log('成功连接到 BrowserTools 服务器');
    
    // 获取截图
    const screenshot = await captureScreenshot(client, true);
    console.log('已获取截图，大小：', screenshot.length);
    
    // 获取控制台日志
    const logs = await getConsoleLogs(client);
    console.log(`获取到 ${logs.length} 条控制台日志`);
    
    // 获取网络请求
    const requests = await getNetworkRequests(client);
    console.log(`获取到 ${requests.length} 条网络请求`);
    
    // 获取选中元素
    const element = await getSelectedElement(client);
    console.log('选中的元素：', element.tagName, '#' + element.id);
    
    // 运行性能审计
    const performanceResult = await runPerformanceAudit(client);
    console.log('性能得分：', performanceResult.score);
    
    // 运行 SEO 审计
    const seoResult = await runSEOAudit(client);
    console.log('SEO 得分：', seoResult.score);
    
    // 运行无障碍审计
    const a11yResult = await runAccessibilityAudit(client);
    console.log('无障碍得分：', a11yResult.score);
    
    console.log('演示完成！');
  } catch (error) {
    console.error('演示过程中发生错误:', error);
  }
}

// 如果直接运行此文件，执行演示
if (require.main === module) {
  demo().catch(console.error);
}

// 导出所有函数以供其他模块使用
module.exports = {
  initBrowserToolsClient,
  captureScreenshot,
  getConsoleLogs,
  getNetworkRequests,
  getSelectedElement,
  runPerformanceAudit,
  runSEOAudit,
  runAccessibilityAudit,
  demo
}; 