import { Metadata } from "next";


// 导出一个名为 generateMetadata 的异步函数
// export const: 导出一个命名常量，使其他文件可以导入此函数
// async: 声明这是一个异步函数，可以在其中使用 await
// generateMetadata这个变量名是Next.js的约定写法（钩子），不能替换成别的
export const generateMetadata = async ({ params }) => {
    // { params }: 参数解构，直接从函数参数中提取 params 对象
    // 从 params 对象中提取 productId 属性
    const id = (await params).productId
    // return 返回一个对象，包含页面的元数据信息
    // 这个对象会被 Next.js 用来设置页面的 <title> 标签
    return {
        // 使用模板字符串 (`) 动态组合字符串，插入变量值
        // ${id}: 在字符串中插入 id 变量的值
        title: `Product ${id}`
    }
}


/*
export default async function ProductDetail({ params }: {
    params: Promise<{ productId: string }>
}) {
    const productId = (await params).productId;
    return <h1>Details about product {productId} </h1>
}

这段 TypeScript 代码的作用是：
    1.{ params }: 使用解构赋值从函数参数中获取 params 对象
    2.: { params: Promise<{ productId: string }> }: 这是类型注解，表示：
        params 是一个 Promise 对象
        Promise 解析后会得到一个对象，这个对象包含 productId 属性
        productId 的类型是字符串（string）

下面使用纯js版，两个版本在功能上一致，区别为：
    TypeScript 版本提供了类型检查，可以在开发时就发现类型相关的错误
    JSX 版本更简洁，但失去了类型检查的保护
*/

export default async function ProductDetail({ params }) {
    const productId = (await params).productId;
    /*
        (1) const productId = ... - 声明一个名为 productId 的常量变量
        (2) await params - 等待 Promise 对象 params 解析完成
        (3) (await params) - 用括号包裹确保先执行 await 操作
        (4) .productId - 从解析后的对象中获取 productId 属性
        整体效果：将异步获取的 params 对象中的 productId 属性值赋给 productId 变量
    */
    return <h1>Details about product {productId}</h1>
}

/*
为什么需要 await：
    如果不使用 await，我们将直接获得一个 Promise 对象，而不是实际的值.
    使用 await 可以等待 Promise 解析完成，获取实际的参数值.
    await 只能在 async 函数中使用，所以函数需要声明为 async.
*/
