import Link from "next/link";
import Item from "./item";

export default function Mainshoppingpage(){
    return(
        <main>
            <h1>SHOPPING LIST: </h1>
            <p><Link href ="../">Go Back</Link></p>
            <Item />
            
        </main>

    )
}