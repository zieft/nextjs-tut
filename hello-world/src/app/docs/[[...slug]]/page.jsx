/*
 * 错误版本：
 * export default async function Docs(params) {
 *     const { slug } = await params;
 *     ...
 * }
 * 
 * 错误原因：
 * 1. Next.js 传递给页面组件的参数是一个对象，其中包含 params 属性
 * 2. 直接使用 params 作为函数参数是错误的，应该使用 { params } 进行解构
 * . [...slug] 路由会将 URL 路径部分存储在 params.slug 数组中
 */

export default async function Docs({ params }) {
    // `params` should be awaited before using its properties.
    const { slug } = await params;
    console.log(slug)
    
    // ?代表判断是否存在
    if (slug?.length === 2) {
        return (
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>)
    } else if (slug?.length === 1) {
        return (
            <h1>
                Viewing docs for feature {slug[0]}
            </h1>
        )
    }
    return <h1>Docs home page</h1>;
}

/*
 * 说明：
 * 1. 现在正确使用 { params } 解构参数
 * 2. 示例 URL 对应的 slug 值：
 *    - /docs/123 -> slug = ["123"]
 *    - /docs/123/456 -> slug = ["123", "456"]
 * 3. [...]slug] 不会匹配 /docs（为空的情况），需要使用 [[...slug]] 表示可选
 * 4. 如果同时需要支持 /docs，可以单独创建 app/docs/page.jsx 文件
 */

