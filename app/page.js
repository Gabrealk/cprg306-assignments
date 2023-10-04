import Link from "next/link";
import Geninfo from "./info-component";

export default function Home() 
{
  return (
    <main>
      <font size = "10" ><h1>CPRG 306: Web dev 2 assignments</h1></font>
      <Geninfo /> 

      <div>
        <button className="font-bold 
                px-7 py-2 
                text-black 
                bg-blue-700 
                border-2 border-black m-4 rounded 
                hover:bg-blue-500">
          <p><Link href="week2">Week 2</Link></p>
        </button>
      </div>


      <div>
        <button className="font-bold 
                px-7 py-2 
                text-black 
                bg-blue-700 
                border-2 border-black m-4 rounded 
                hover:bg-blue-500">
          <p><Link href="week3">Week 3</Link></p>
        </button>
      </div>

      <div>
        <button className="font-bold 
                px-7 py-2 
                text-black 
                bg-blue-700 
                border-2 border-black m-4 rounded 
                hover:bg-blue-500">
          <p><Link href="week4">Week 4</Link></p>
        </button>
      </div>

    </main>


  )
}
