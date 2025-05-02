import Link from "next/link";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "forgot-password" }
]

export default function AuthLayout({ children }) {
    return (
        <div>
            {/* 使用 map 方法遍历 navLinks 数组，为每个链接项生成导航元素 */}
            {navLinks.map((link) => {
                return (
                    /* Link 组件：Next.js 内置的导航组件，用于页面间无刷新跳转 */
                    /* href 属性：设置链接的目标路径 */
                    /* key 属性：React 需要的唯一标识符，用于优化列表渲染性能 */
                    <Link href={link.href} key={link.name}>
                        {/* 显示链接文本，使用 link 对象中的 name 属性 */}
                        {link.name}
                    </Link>
                )
            })}
            {/* children 属性：渲染嵌套路由的内容 */}
            {/* 在 Next.js 中，这将显示当前路由对应的页面组件 */}
            {/* 这是组件组合的关键，允许布局和页面内容分离 */}
            {children}
        </div>
    )
}