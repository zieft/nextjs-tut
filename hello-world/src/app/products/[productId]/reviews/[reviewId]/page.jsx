import {notFound, redirect} from "next/navigation";

function getRandomInt(count) {
    return Math.floor(Math.random() * count)
}

export default async function ReviewDetail({params}) {
    //随机抛出错误
    const random=getRandomInt(2)
    if (random === 1) {
        throw new Error("Error loading review")
    }
    const {productId, reviewId} = await params

    if (parseInt(reviewId) > 1000) {
        // notFound();
        redirect("/products")
    }

    return <h1>Review {reviewId} for product {productId}.</h1>
}
