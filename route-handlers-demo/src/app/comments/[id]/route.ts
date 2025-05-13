import {comments} from "@/app/comments/data";

export async function GET(
    _request: Request,
    {params}: { params: Promise<{ id: string }> }) {
        const { id } = await params;
        // 在 comments 数组中查找指定 id 的评论
        // 1. find() 方法：遍历数组直到找到第一个满足条件的元素
        // 2. 箭头函数 (comment) => ... 作为 find 的回调函数
        // 3. parseInt(id) 将 URL 参数中的 id 字符串转换为数字
        // 4. === 严格比较 comment.id 和转换后的 id 是否相等
        // 5. 如果找到匹配的评论，返回该评论对象；否则返回 undefined
        const comment = comments.find((comment) => comment.id === parseInt(id));
    return Response.json(comment);
}
