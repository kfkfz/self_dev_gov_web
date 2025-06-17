#!/bin/bash

# 链盾科技官网 - Cloudflare Pages 部署脚本
# 使用方法: chmod +x deploy.sh && ./deploy.sh

echo "🚀 开始部署链盾科技官网到 Cloudflare Pages..."



# 清理之前的构建
echo "🧹 清理之前的构建..."
rm -rf dist
rm -rf .nuxt

# 安装依赖
echo "📦 安装依赖..."
npm install

# 生成静态网站
echo "🔨 构建静态网站..."
npm run generate

# 检查构建结果
if [ -d "dist" ]; then
    echo "✅ 构建成功！"
    echo "📁 构建文件位于: ./dist"
    echo ""
    echo "📊 构建统计:"
    echo "文件总数: $(find dist -type f | wc -l)"
    echo "总大小: $(du -sh dist | cut -f1)"
    echo ""
    echo "🎯 下一步操作:"
    echo "1. 访问 https://dash.cloudflare.com/"
    echo "2. 创建新的 Pages 项目"
    echo "3. 上传 dist 文件夹中的所有内容"
    echo ""
    echo "📖 详细部署指南请参考: DEPLOYMENT_GUIDE.md"
else
    echo "❌ 构建失败！请检查错误信息"
    exit 1
fi
