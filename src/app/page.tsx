import Link from "next/link";


export default function Home() {

  return (
    <>
       <h1>Hello World!</h1>

       <Link href={"/otherPage"}>別ページへ遷移</Link>
    </>
  )
}