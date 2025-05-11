import Link from "next/link";

export default function F1() {
    return (
        <>
            <h1>F1 page</h1>
            <div>
                <Link href="/f1/f2">F2</Link>
                <Link href="/f3">F3</Link>
            </div>
        </>

    )
}

/*
* 当用户访问/f1时，页面显示一个F2超链接。
* 用户点解F2, 将跳转到(.)f2/文件夹中定义的page.jsx中
* 此时，当用户点刷新，或直接铜鼓url访问/f1/f2，则加载f2/文件夹中的page.jsx
* */