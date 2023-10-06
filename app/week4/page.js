import Link from "next/link";
import Newevent from "./new-item";



export default function usability(){
    return(
        <main>

            <Newevent />

            <button className="font-bold 
                px-7 py-2 
                text-black 
                bg-blue-700 
                border-2 border-black m-4 rounded 
                hover:bg-blue-500">
                <p><Link href ="../">Go Back</Link></p>
            </button>
            
        </main>
    )
}