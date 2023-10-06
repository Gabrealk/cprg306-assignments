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
            <form>
                {/*used to input the items name and updates the value
                based on the input*/}
                <label>Item Name:</label>
                <input type="text" 
                value={name} placeholder="Item name"
                onChange={(nchange) => setName(nchange.target.value)}
                required //makes the name field required in order to submit the form
                color="black"
                />
                {/*the change basically represents he event object */}

                <label>Quantity:</label>
                <input type="number"
                value={quantity} min={1} max={99}
                onChange={(qchange) => setName(qchange.target.value)}
                required
                //same dealio as before
                />

                <label>Category:</label>
                <select value={category} onChange={(cchange) => setName(cchange.target.value)}>
                    <option value="produce">produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="household">produce</option>
                    <option value="Other">Other</option>
                </select>
                {/*above select statement gives the user different options
                 to choose from with the variables stated*/}

                <button type="submit">Add Item</button>

            </form>

        </main>
    )
}