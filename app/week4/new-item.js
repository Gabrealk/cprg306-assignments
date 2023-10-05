"use client";

import { useState } from "react"

export default function Newevent(){
    //quick side note things not in the return thingy
    //is considered js pre sure

    //initializing state Variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce")

    



    //stuff in the return/main field is html/css etc
    return(
        <main>

        </main>
    )
}