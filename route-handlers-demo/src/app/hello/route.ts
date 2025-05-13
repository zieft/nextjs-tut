// route.ts文件名是next.js的一个约定
// GET函数的定义也是约定写法


export async function GET() {
    return new Response('Hello World!');
}