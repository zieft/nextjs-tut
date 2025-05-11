import Link from "next/link";

export default function F2() {
    return (
        <>
            <h1>Inner F2 page</h1>
            <div>
                <Link href={"/f5"}>F5</Link>
            </div>
        </>
    )
}