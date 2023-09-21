import Link from "next/link";
import Geninfo from "./info-component";

export default function Home() 
{
  return (
    <main>
      <h1>CPRG 306: Web dev 2 assignments</h1>
      <Geninfo /> 
      <p><Link href="https://webdev2-derek-sait.vercel.app/week2">Week 2</Link></p> 
      <p><Link href="https://webdev2-derek-sait.vercel.app/week3">Week 3</Link></p>
    </main>


  )
}
