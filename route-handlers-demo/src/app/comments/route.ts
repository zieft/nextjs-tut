import {comments} from "@/app/comments/data";

export async function GET() {
    // 使用 Response.json() 静态方法创建响应
    // 优点：
    // 1. 自动将数据转换为 JSON 字符串
    // 2. 自动设置 Content-Type: application/json 头部
    // 3. 默认返回 200 状态码
    // 适用于简单的 JSON 数据返回场景
    return Response.json(comments);
}

export async function POST(request: Request) {
    const comment = await request.json()
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    }
    comments.push(newComment)
    
    // 使用 new Response() 构造函数创建响应
    // 优点：
    // 1. 可以手动控制响应体的格式（需要自己调用 JSON.stringify()）
    // 2. 可以自定义响应头
    // 3. 可以设置自定义状态码
    // 适用于需要更多控制权的场景，如：
    // - 需要返回非 200 状态码（如 201 表示创建成功）
    // - 需要设置自定义响应头
    // - 需要返回非 JSON 格式的数据
    return new Response(JSON.stringify(newComment), {
        headers: {"content-type": "application/json"},
        status: 201,
    });
}
