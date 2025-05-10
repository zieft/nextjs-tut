"use client"
import {useRouter} from "next/navigation";
import {startTransition} from "react";


export default function ErrorBoundary({error, reset}) {
    // 获取 Next.js 的路由对象，用于进行页面导航和刷新等操作
    const router = useRouter()

    // 定义一个 reload 函数，用于重新加载页面和重置错误边界
    const reload = () => {  
        // 使用 startTransition 来管理状态更新，避免阻塞主线程
        startTransition(() => {
            // 调用 router.refresh() 重新加载页面
            router.refresh()
            // 调用 reset() 重置错误边界
            reset()
        })
    }
    return (
        <div>
            {error.message}
            {/* reset() 只在客户端进行刷新，而抛出错误的随机数是服务器端的 */}
            {/*<button onClick={()=>reset()}>Try again</button>*/}
            <button onClick={()=>reload()}>Try again</button>
        </div>
    )
}