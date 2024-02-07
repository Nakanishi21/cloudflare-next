import Link from "next/link";

export default function OtherPage() {
	return (
		<>
			<h1>This is APP MyPage</h1>
			<Link href={"/otherPage"}>別ページへ遷移</Link>
		</>
	)
}