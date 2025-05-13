//同一个目录中同时存在page.tsx和route.ts时，访问该url会默认返回route.ts的response
//为解决这个问题，通常的的做法是在该目录中新建一个api文件夹，将route.ts放进去即可
//网址在进行访问的时候加上api segment

export async function GET() {
    return new Response('Profile API data');
}