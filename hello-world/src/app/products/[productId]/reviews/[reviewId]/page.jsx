import { notFound } from "next/navigation";

export default async function ReviewDetail({ params }) {

    const { productId, reviewId } = await params

    if (parseInt(reviewId) > 1000) {
        notFound();

    }

    return <h1>Review {reviewId} for product {productId}.</h1>
}
