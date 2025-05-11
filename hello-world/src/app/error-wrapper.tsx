"use client"
import "./global.css"

import {useState} from "react";

// 定义包装器组件的属性接口
interface WrapperProps {
    children: React.ReactNode; // 子组件，可以是任何React节点
}

// 错误模拟器组件：用于测试错误边界
const ErrorSimulator = ({
                            message = "An error occurred", // 默认错误消息
                        }: {
    message?: string; // 可选的错误消息参数
}) => {
    // 使用useState钩子来管理错误状态
    const [error, setError] = useState(false);

    // 如果error为true，则抛出错误
    if (error) throw new Error(message);

    // 渲染一个触发错误的按钮
    return (
        <button
            title="Simulate an error"
            className="bg-red-950 text-red-50 rounded p-1 leading-none font-semibold text-sm"
            onClick={() => setError(true)} // 点击时设置error为true
        >
            Simulate Error
        </button>
    )
}

// 错误包装器组件：用于包装其他组件并提供错误模拟功能
export const ErrorWrapper = ({children}: WrapperProps) => {
    return (
        // 创建一个带有边框和圆角的容器
        <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
            {/* 在容器顶部绝对定位错误模拟器按钮 */}
            <div className="absolute top-0 left-4 -translate-y-1/2">
                <ErrorSimulator message="Simulated error in root layout"></ErrorSimulator>
            </div>
            {/* 渲染子组件 */}
            {children}
        </div>
    )
}