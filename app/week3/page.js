import Link from "next/link";
import Item from "./item";

export default function Mainshoppingpage(){
    return(
        <main>
            <h1 className="font-bold ">SHOPPING LIST: </h1>
            <Item />
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