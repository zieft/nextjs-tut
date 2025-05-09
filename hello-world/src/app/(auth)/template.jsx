"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css'
import {useState} from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({ children }) {
    const [input, setInput] = useState("")
    const pathname = usePathname()
    return (
        <div>
            {/* 输入框组件（受控组件）：用于用户输入文本
                - value={input}: 将输入框的值与input状态变量绑定
                - onChange: 当用户输入时更新input状态
                - 通过event.target得到发生事件的DOM元素对象
                - event.target.value: 获取用户输入的新值 */}
            <div>
                <input value={input} onChange={event => setInput(event.target.value)}/>
            </div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')
                return (
                    <Link
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