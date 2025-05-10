function getRandomInt(count) {
    return Math.floor(Math.random() * count)
}


export default function ProductDetailLayout({ children }) {
    //随机抛出错误
    const random=getRandomInt(2)
    if (random === 1) {
        throw new Error("Error loading product")
    }
    return (
        <>
            {children}
            <h2>Featured product Layout</h2>
        </>
    )
}