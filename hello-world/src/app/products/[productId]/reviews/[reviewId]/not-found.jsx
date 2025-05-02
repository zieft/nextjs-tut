"use client"

/*
    usePathname() 只能用在client component中， 
    'use client'可强行将服务器组件变成客户端组件
*/


import { usePathname } from "next/navigation"
/*
    由于NotFound函数不能接受params，
    因此需要用到usePathname来解析url中的参数
*/

export default function NotFound() {
    const pathname = usePathname()
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4]

    return (
        <div>
            <h2>Review {reviewId} not found for product {productId}</h2>
        </div>
    )
}