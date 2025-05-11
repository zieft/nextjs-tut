/**
 * 这是complex-dashboard路由的默认页面组件
 * 
 * 在Next.js的App Router中，default.jsx文件的作用是：
 * 1. 当用户访问complex-dashboard/路径但没有指定具体的并行路由时显示的默认UI
 * 2. 当用户访问的并行路由加载时显示的fallback UI
 * 
 * 如果没有default.jsx文件：
 * - 用户直接访问complex-dashboard/路径时会出现404错误
 * - 并行路由加载过程中不会显示fallback内容，可能导致用户体验不佳
 */

export default function ComplexDashboardDefaultPage() {
    // 此function也可以和page.jsx中的内容完全保持一致
    return (
        <h1>Complex dashboard default</h1>
    )
}