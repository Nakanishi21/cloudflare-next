import Link from "next/link";

export default function OtherPage() {
	return (
		<>
				<h1>Hello World! 2</h1>
				<div>ここは別ページです</div>
				<Link href={"/myPage"}>マイページへ遷移</Link>
		</>
	)
}