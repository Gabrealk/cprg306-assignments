"use client";

import { useState } from "react"

export default function Newevent(){
    //quick side note things not in the return thingy
    //is considered js pre sure

    //initializing state Variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce")

    const submitFunction = (event) => {
        event.preventDefault();
        
        //creates the object with the values above
        const Items = {
            name,
            quantity,
            category,
        };

        //logs the items to the console
        console.log(Items);

        //backticks ``` are used for implementing literals, or embedded expressions
        //window alert when submitted pre sure
        window.alert(`Item: ${Items.name}, Quantity: ${Items.quantity}, Category: ${Items.category}`);
        

      };




    //stuff in the return/main field is html/css etc
    return(
        <main>

            
            <input type="text" 
            value={name} placeholder="Item name"
            onChange={(change) => setName(change.target.value)} 
            />


            <form onSubmit="submitFunction(event)">
                <button type="submit">Submit</button>
            </form>

        </main>
    )
}