import Link from "next/link"

export default function ProductList(){
    const productId = 100
    return (
    <>
        <h1>Product list</h1>
        <h2>
            <Link href="/products/1">Peoduct 1</Link>
        </h2>
        <h2>Peoduct 2</h2>

        <h2>
            <Link href="/products/3" replace>Peoduct 3</Link>
        </h2>
        {/* replace的作用就是在用户点击连接跳转到新页面后，按返回键会直接返回到主页 */}
        <Link href={`/products/${productId}`}>Product {productId}</Link>
        
    </>)
}