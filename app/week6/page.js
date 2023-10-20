"use client";

import { useState } from "react";
import Link from "next/link";
import Item from "./item";
import Itemlist from "./item-list";
import Newitem2 from "./new-item";
import itemsData from './itemsData.json';


export default function Mainshoppingpage(){

    //initializing a variable named items from the data from the json file
    const [items, setItems] = useState(itemsData);

    //event handler to add a new item to "items" in the existing array
    const handleAddItem = (Newitem2) => setItems(...items, Newitem2);

    return(
        <main>
            <font size = "10"><h1>SHOPPING LIST: </h1></font>
            <font size="5"><h2 className="font-bold pl-2">Add A New Item</h2></font>
            {/*uses the event handler into the newitem2*/}    
            <Newitem2 onAddItem={handleAddItem}/>

            {/*the items from the handler get passed here into the Itemlist*/}
            <Itemlist items={items}/>

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