import Link from "next/link";
import Geninfo from "../info-component";

export default function Shoplist(){
    return(
        <main>
            <h1>Shopping list</h1>
            <Geninfo />
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