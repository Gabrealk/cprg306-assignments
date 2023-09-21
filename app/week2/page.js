import Link from "next/link";
import Geninfo from "../info-component";

export default function shoplist(){
    return(
        <main>
            <h1>Shopping list</h1>
            <Geninfo />
            <p><Link href ="../">Go Back</Link></p>
        </main>
    )
}