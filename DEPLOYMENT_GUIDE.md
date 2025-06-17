# 🚀 Cloudflare Pages 部署指南 - 链盾科技官网

## 📋 部署前准备检查

✅ **项目配置已就绪**
- `target: 'static'` - 静态网站生成
- `ssr: false` - 客户端渲染
- `nuxt generate` 脚本 - 生成静态文件

✅ **代码优化完成**
- 粒子背景效果无闪烁
- 移动端性能优化
- SEO元数据完整

## 🔧 部署前代码调整

### 1. 优化 nuxt.config.js
需要添加一些生产环境优化配置。

### 2. 创建 _redirects 文件
用于处理SPA路由。

### 3. 添加 robots.txt 优化

## 🚀 部署步骤

### 方法一：GitHub + Cloudflare Pages (推荐)

#### 步骤 1: 推送代码到 GitHub
```bash
# 在项目目录中初始化 Git
cd /Users/maikejun/Desktop/code/govWeb
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: 链盾科技官网完整版本"

# 添加远程仓库 (替换为您的仓库地址)
git remote add origin https://github.com/你的用户名/chainshield-website.git

# 推送到 GitHub
git push -u origin main
```

#### 步骤 2: 在 Cloudflare Pages 中配置

1. **登录 Cloudflare**
   - 访问 https://dash.cloudflare.com/
   - 登录您的账户

2. **创建 Pages 项目**
   - 点击左侧菜单 "Pages"
   - 点击 "创建项目"
   - 选择 "连接到 Git"

3. **连接 GitHub**
   - 授权 Cloudflare 访问您的 GitHub
   - 选择 govWeb 仓库

4. **配置构建设置**
   ```
   项目名称: chainshield-website
   生产分支: main
   框架预设: Nuxt.js
   构建命令: npm run generate
   构建输出目录: dist
   根目录: /
   ```

5. **环境变量设置**
   ```
   NODE_VERSION: 18.17.0
   NPM_VERSION: 9.6.7
   ```

### 方法二：直接上传 (快速方式)

#### 步骤 1: 本地构建
```bash
# 安装依赖
npm install

# 生成静态文件
npm run generate
```

#### 步骤 2: 上传到 Cloudflare Pages
1. 访问 https://dash.cloudflare.com/
2. 点击 "Pages" → "创建项目"
3. 选择 "上传资产"
4. 上传 `dist` 文件夹中的所有内容

## 🎯 自定义域名配置

### 1. 添加自定义域名
- 在 Pages 项目中点击 "自定义域名"
- 添加您的域名 (如: chainshield.pro)

### 2. DNS 配置
在您的域名注册商处设置：
```
类型: CNAME
名称: @
目标: your-project.pages.dev
```

## ⚡ 性能优化建议

### 1. 启用 Cloudflare 功能
- **Auto Minify**: HTML, CSS, JS
- **Brotli**: 压缩
- **HTTP/3**: 启用
- **0-RTT**: 启用

### 2. 缓存规则
```
静态资源 (*.js, *.css, *.png, *.jpg): Cache everything, 1 year
HTML 文件: Cache everything, 1 hour
```

## 🔒 安全配置

### 1. SSL/TLS 设置
- 加密模式: "完全(严格)"
- 最低 TLS 版本: 1.2
- 启用 HSTS

### 2. 安全标头
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 📊 监控和分析

### 1. Web Analytics
- 在 Cloudflare 中启用 Web Analytics
- 将代码添加到网站

### 2. 性能监控
- Core Web Vitals 监控
- 页面加载时间分析

## 🐛 常见问题解决

### 1. 构建失败
```bash
# 清理缓存重试
rm -rf node_modules
rm package-lock.json
npm install
npm run generate
```

### 2. 图片路径问题
确保所有图片路径以 `/` 开头：
```javascript
// 正确
src="/imgs/logo.png"

// 错误
src="imgs/logo.png"
```

### 3. 路由问题
SPA 路由已通过 `_redirects` 文件处理。

## 🎉 部署完成检查清单

- [ ] 网站可以正常访问
- [ ] 粒子背景效果正常
- [ ] 移动端显示正常
- [ ] 所有链接和图片正常
- [ ] 联系表单功能正常
- [ ] SEO 元数据正确
- [ ] 页面加载速度良好

## 📞 技术支持

如果遇到问题，可以：
1. 检查 Cloudflare Pages 构建日志
2. 使用浏览器开发者工具调试
3. 参考 Cloudflare Pages 官方文档

---

**🔥 部署成功后，您的链盾科技官网将拥有：**
- ⚡ 全球 CDN 加速
- 🔒 免费 SSL 证书
- 📊 实时性能监控
- 🛡️ DDoS 保护
- 🌍 99.9% 可用性保证

立即开始部署，让您的专业区块链开发服务走向全球！🚀
