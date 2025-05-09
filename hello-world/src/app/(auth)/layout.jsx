"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css'

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({ children }) {
    const pathname = usePathname() //usePathname返回当前所处的URL
    return (
        <div>
            {navLinks.map((link) => {
                // 判断当前路径是否匹配链接，确定链接是否为"激活"状态
                // pathname === link.href：精确匹配当前路径与链接路径
                // pathname.startsWith(link.href) && link.href !== '/'：判断是否为子路径且排除根路径'/'
                // 例如：如果当前在'/login/reset'，则'/login'链接也会显示为激活状态
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')
                return (
                    <Link
                        // 使用三元运算符根据链接激活状态动态设置CSS类名
                        // isActive为true时：应用"font-bold mr-4"样式（粗体字，右边距4单位）
                        // isActive为false时：应用"text-blue-500 mr-4"样式（蓝色文本，右边距4单位）
                        // 这种方式可以在用户导航时提供视觉反馈，高亮当前所在页面的导航链接
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}