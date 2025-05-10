"use client"
import {useRouter} from "next/navigation";
import {startTransition} from "react";


export default function ErrorBoundary({error, reset}) {
    const router = useRouter()
    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <div>
            {error.message}
            {/* reset() 只在客户端进行刷新，而抛出错误的随机数是服务器端的 */}
            {/*<button onClick={()=>reset()}>Try again</button>*/}
            <button onClick={()=>reload()}>Try again</button>
        </div>
    )
}

/*
第19行可以简写成：<button onClick={reload}>Try again</button>

为什么可以简写？
1. onClick={reload} 的原理
    这里直接把 reload 函数的引用传递给 onClick。
    当按钮被点击时，React 会自动调用 reload()，并把事件对象作为参数传递进去（如果你需要用到事件对象，可以在 reload 的参数里接收）。
2. onClick={() => reload()} 的原理
    这里是传递了一个匿名箭头函数，点击时执行这个箭头函数，箭头函数内部再调用 reload()。
    这种写法常用于需要传递参数的情况，比如：onClick={() => reload(123)}。
3. 这两种写法的区别
    如果 reload 不需要参数，直接写 onClick={reload} 更简洁。
    如果需要传递参数，或者需要在调用前做一些额外操作，就用箭头函数。


为什么需要传递参数时，不能写成 <button onClick={reload(123)}>Try again</button>？
1. 语法行为不同
onClick={reload(123)}
    这写法的意思是：立即执行 reload(123)，并把它的返回值（而不是函数本身）赋值给 onClick。
    也就是说，组件渲染时，reload(123) 就已经被调用了，而不是等到点击按钮时才调用。
    如果 reload 没有返回一个函数，onClick 就会变成 undefined 或其他非函数值，点击按钮时不会有任何效果，甚至会报错。
onClick={() => reload(123)}
    这写法的意思是：传递一个匿名函数，只有在点击按钮时，这个函数才会被调用，进而执行 reload(123)。
 */