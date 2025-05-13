import {comments} from "@/app/comments/data";

export async function GET(
    _request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    const {id} = await params
    const comment = comments.find((comment) => comment.id === parseInt(id))
    return Response.json(comment)
}

// PATCH 请求处理函数：用于更新指定 id 的评论内容
// request: 包含请求信息的 Request 对象
// params: 包含路由参数的对象，其中 id 是字符串类型
export async function PATCH(
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    // 从路由参数中获取评论 id
    const {id} = await params
    
    // 解析请求体中的 JSON 数据
    const body = await request.json()
    
    // 从请求体中解构出要更新的评论文本
    const {text} = body
    
    // 在 comments 数组中查找指定 id 的评论的索引位置
    // findIndex() 方法返回满足条件的第一个元素的索引，如果没找到返回 -1
    const index = comments.findIndex((comment) => comment.id === parseInt(id))
    
    // 更新找到的评论的文本内容
    comments[index].text = text
    
    // 返回更新后的评论对象
    return Response.json(comments[index])
}

// DELETE 请求处理函数：用于删除指定 id 的评论
// _request: 包含请求信息的 Request 对象（下划线表示此参数未使用）
// params: 包含路由参数的对象，其中 id 是字符串类型
export async function DELETE(
    _request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    // 从路由参数中获取要删除的评论 id
    const {id} = await params
    
    // 在 comments 数组中查找指定 id 的评论的索引位置
    const index = comments.findIndex((comment) => comment.id === parseInt(id))
    
    // 保存被删除评论的文本内容，用于返回给客户端
    const deletedComment = comments[index].text
    
    // 使用 splice() 方法从数组中删除指定索引位置的评论
    // splice(index, 1) 表示从 index 位置开始删除 1 个元素
    comments.splice(index, 1)
    
    // 返回被删除评论的文本内容
    return Response.json(deletedComment)
}