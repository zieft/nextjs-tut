import Link from "next/link"
import { use } from "react"

export default function NewsArticle({ params, searchParams }) {
    // 使用 use() 钩子解构并同步获取动态路由参数 articleId
    // use() 是 React 提供的新钩子，用于在渲染期间同步读取 Promise、Context 等数据源的值
    // 在 Next.js 中，params 存储的是 URL 路径参数，这里从 [articleId] 动态路由中提取值
    const { articleId } = use(params)
    
    // 使用 use() 钩子解构并同步获取 URL 查询参数 lang，并设置默认值为 'en'
    // searchParams 是 Next.js 提供的查询字符串参数对象
    // 当 URL 中没有提供 lang 参数时，会使用默认值 'en'
    const { lang = 'en' } = use(searchParams)
    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang} </p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>Franch</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            </div>
        </div>
    )
}