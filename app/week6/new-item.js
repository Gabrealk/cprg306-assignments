"use client";

import { useState } from "react"

export default function Newitem2({onAddItem}){
    //quick side note things not in the return thingy
    //is considered js pre sure

    //initializing state Variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce")

    const submitFunction = (event) => {
        event.preventDefault();
        
        //creates the object with the values above
        const NewItems = {
            name,
            quantity,
            category,
        };

        //logs the items to the console
        console.log(NewItems);

        //backticks ``` are used for implementing literals, or embedded expressions
        //window alert when submitted pre sure
        //alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

        //additem prop and passes the new item object stated above
        onAddItem(NewItems);

        //reset the form, by setting states back to normal
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    //stuff in the return/main field is html/css etc
    return(
        <main className="flex items-center justify-left ">
            <form className="max-w-md p-2" onSubmit={submitFunction}>
                <div className="mb-4">
                    {/*used to input the items name and updates the value
                    based on the input
                    <label>Item Name:</label>*/}
                    <input type="text"
                        value={name} placeholder="Item name"
                        onChange={(nchange) => setName(nchange.target.value)}
                        required //makes the name field required in order to submit the form
                        className="text-black border rounded w-full py-2 px-3 leading-tight mb-4"
                    />
                    {/*the change basically represents the event object */}

                    <label>Quantity: </label>
                    <input type="number"
                        value={quantity} min={1} max={99}
                        onChange={(qchange) => setQuantity(qchange.target.value)}
                        required
                        className="text-black border rounded w-half py-2 px-3 leading-tight"
                        //same dealio as before
                    />

                    <label className="px-0.5">Category: </label>
                    <select type ="text" value={category} onChange={(cchange) => setCategory(cchange.target.value)} 
                    className="text-black border rounded w-half py-2 px-3 leading-tight" 
                    required>
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
                </div>
                
                <div>
                    <button className="bg-blue-500 text-white rounded w-full py-2 px-3 leading-tight" type="submit">Add Item</button>       
                </div>

            </form>
            
        </main>
    )
}