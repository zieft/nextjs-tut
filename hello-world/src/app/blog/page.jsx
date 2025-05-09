export default async function Blog() {
    // 使用 Promise 包装 setTimeout，实现异步延迟
    await new Promise((resolve) => {
        // setTimeout 用于设置一个2秒（2000毫秒）的延迟
        setTimeout(() => {
            // 2秒后调用 resolve，Promise 完成，外层 await 继续执行
            resolve("intentional delay")
        }, 2000)
    })
    return <h1>My blog</h1>
}