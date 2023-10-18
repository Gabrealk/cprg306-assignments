import Link from "next/link";
import Item from "./item";
import Itemlist from "./item-list";
import Newitem2 from "./new-item";


export default function Mainshoppingpage(){
    return(
        <main>
            <font size = "10"><h1>SHOPPING LIST: </h1></font>
            <font size="5"><h2>Add A New Item</h2></font>
            <Newitem2 />

            <Itemlist />

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