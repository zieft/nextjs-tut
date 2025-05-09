/**
 * loading.jsx 是 Next.js 13+ 中的一个特殊文件，用于实现加载状态UI
 * 
 * 作用：
 * 1. 当页面或组件正在加载时，Next.js 会自动显示这个组件
 * 2. 这是 React Suspense 的一个实现，用于提供更好的用户体验
 * 3. 可以显示加载动画、骨架屏或其他加载状态的UI
 * 
 * 特点：
 * - 自动处理加载状态，无需手动管理
 * - 与路由系统集成，在页面切换时自动显示
 * - 可以针对特定路由创建独立的加载状态
 */
export default function Loading() {
    return (
        <h1>Loading</h1>
    )
}
