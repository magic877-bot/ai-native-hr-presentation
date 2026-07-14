# AI-Native 组织：HR 的下一次跃迁

一套面向 CHRO、HRD、OD/TD 负责人及企业管理者的 16:9 响应式 HTML 演示。

核心观点：AI-Native 不是工具普及，而是人、Agent、流程与治理共同参与的价值链重构；HR 的下一次跃迁，是成为组织智能架构师。

## 在线演示

GitHub Pages 启用后，可直接通过仓库的 Pages 地址访问。发布入口位于 [`docs/index.html`](docs/index.html)。

## 本地使用

```bash
npm install
npm run dev
```

浏览器打开本地地址后，可使用：

- `←` / `→`：前后翻页
- `Space` / `PageDown`：下一页
- `PageUp`：上一页
- `Home` / `End`：首尾页
- `F`：进入全屏

也可以直接双击 `AI-Native-HR-完整演示-双击打开.html`，无需安装依赖或联网。

## 构建

```bash
npm run build
npm run standalone
```

`npm run standalone` 会同步生成：

- `AI-Native-HR-完整演示-双击打开.html`：本地独立版本
- `docs/index.html`：GitHub Pages 公开版本

## 一键发布到 GitHub

登录 GitHub CLI 后，在项目根目录运行：

```bash
bash scripts/publish-github.sh
```

脚本会创建公开仓库 `ai-native-hr-presentation`、推送 `main` 分支，并启用 `docs/` 目录的 GitHub Pages。

## 项目结构

- `src/`：React 演示源码
- `public/`：品牌与封面视觉资源
- `scripts/`：独立 HTML 构建脚本
- `docs/`：GitHub Pages 入口
- `design-qa.md`：设计验收记录
- `PRD.md`：产品需求与逐页设计规划

## 技术栈

- React 19
- Vite 6
- Recharts
- CSS 动效与响应式 16:9 演示画布
