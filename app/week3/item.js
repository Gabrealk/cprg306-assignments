
import Itemlist from "./item-list"
<Itemlist />
export default function Items(){
    return(
        <main>
            <Itemlist />
        </main>

    )
        
}

function Item ({ name, quantity, category }) {
    return(
        <main>
            <h1>{name}</h1>
            <p>The amount of items there are is: {quantity}</p>
            <p>The Item belongs in the {category} category</p>

        </main>
    )
}