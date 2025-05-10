"use client"

export default function ErrorBoundary({error}) {
    return (
        <div>
            {error.message}
        </div>
    )
}