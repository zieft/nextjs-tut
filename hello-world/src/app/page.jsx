import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Welcome Home</h1>
            <Link href="/blog">Blog</Link>
            {/*dynamic route param + query param */}
            <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
            <Link href="/articles/breaking-news-123?lang=fr">Read in Franch</Link>
        </>
    )
}
