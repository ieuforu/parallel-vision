# Next.js 15 Parallel & Intercepting Gallery

这是一个基于 **Next.js 15** 开发的高性能响应式摄影画廊。项目深入探索了 Next.js 的高阶路由能力，旨在提供一种无缝、丝滑且无布局抖动的用户体验。

## 🌟 核心特性

- **高级路由架构**：利用 **Parallel Routes (平行路由)** 与 **Intercepting Routes (拦截路由)** 实现类似 Instagram 的交互体验。点击图片即时弹出 Modal 详情，而直接刷新页面则展示全屏详情页。
- **像素级对齐的骨架屏 (Skeleton Sync)**：针对 `PhotoCardDetail` 组件进行了 1:1 镜像结构的骨架屏设计，通过同步响应式高度类名，彻底消除了图片加载瞬间的布局跳动 (Layout Shift)。
- **深度移动端优化**：
  - **事件冒泡拦截**：在移动端关闭按钮上应用 `e.stopPropagation()`，解决触屏设备上因点击穿透导致的路由连续回退（退回至 Google/上个站点）的 Bug。
  - **响应式容器锁定**：图片在移动端锁定为 `40vh` 高度，配合 `overflow-y-auto` 确保内容区在受限空间内依然可阅读、可滚动。
- **视觉与交互**：
  - 基于 **Tailwind CSS** 的极简主义建筑感设计。
  - 沉浸式深色毛玻璃背景遮罩 (Backdrop Blur)。
  - 响应式搜索过滤逻辑，支持标题实时匹配。

## 📁 关键目录结构

```text
app/
├── @notification/         # 平行插槽：用于渲染拦截后的弹窗内容
│   ├── (.)photo/[id]/     # 拦截路由：拦截 /photo/[id] 路径并映射至 Modal
│   └── default.tsx        # 插槽默认状态，防止页面刷新时 404
├── photo/[id]/            # 实体路由：处理直接访问或刷新页面时的全屏展示
├── layout.tsx             # 根布局：配置主体内容与 @notification 插槽的挂载
└── page.tsx               # 首页：实现图片瀑布流布局与搜索过滤逻辑
components/
├── photo-card-detail.tsx  # 核心详情组件：兼容 Modal 与 Full-page 两种显示模式
└── photo-skeleton.tsx     # 骨架屏组件：与详情组件结构、间距完全对齐
```

## 🛠️ 技术挑战与解决方案

### 1. 解决图片加载导致的布局坍塌

**问题**：图片作为异步资源，加载前后的尺寸不确定会导致 Modal 容器高度瞬间剧变。
**对策**：在 `PhotoCardDetail` 和 `PhotoSkeleton` 中同步使用响应式高度类，确保“坑”的大小在加载前后像素级一致。

```tsx
className = 'h-[40vh] lg:h-full lg:flex-[1.4] ...'
```

### 2. 拦截路由中的“导航过头” (Back-to-Google)

**问题**：移动端点击 Modal 外部的悬浮按钮时，由于 DOM 冒泡会同时触发按钮和遮罩层的 `router.back()`。
**对策**：在移动端专属关闭按钮上拦截事件传递。

```tsx
onClick={(e) => {
  e.stopPropagation();
  router.back();
}}
```

### 3. 真值源 (SSoT) 匹配

**问题**：动态计算 ID 偏移（如 `i + 20`）极易导致首页预览图与详情大图内容不匹配。
**对策**：采用固定的 Picsum ID 映射表，确保路由参数 `id` 直接对应资源 ID，实现前后端数据绝对同步。

## 🚀 快速启动

1. **克隆项目**
   ```bash
   git clone https://github.com/ieuforu/parallel-vision.git
   ```
2. **安装依赖**

   ```bash
   pnpm install
   ```

3. **启动项目**
   ```bash
   pnpm dev
   ```

## 📝 开源协议

MIT License
