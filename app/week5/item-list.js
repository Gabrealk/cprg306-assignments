"use client";
import { useState } from "react";

import Item from './item';
import itemsData from './itemsData.json';


export default function Itemlist(){

  //state variable
  const [sortBy, setSortBy] = useState("name");

  //sort the items
  const itemArray = [...itemsData]; // Make a copy of the itemsData array.

  // Sort the items array based on the sortBy state variable
  itemArray.sort((a, b) => {

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } 

    else if (sortBy === "category") 
    {
      return a.category.localeCompare(b.category);
    }

    else if (sortBy === "grouped")
    {
      return a.grouped.localeCompare(b.grouped);
    }
    //if it matches to 0 it keeps them in its original place unchanged
    return 0;
  });
    
  // Create Sort Buttons and handle sorting
  const handleNameSort = () => setSortBy("name");
  const handleCategorySort = () => setSortBy("category");
  const handleGroupedSort = () => setSortBy("grouped");

  //creating the sort buttons, quick side note triple === sign is a comparison between the data type and value
  const NameSorted = sortBy === "name";
  const CategorySorted = sortBy === "category";
  const GroupedSorted = sortBy === "grouped";

  //so you can view in the console of what you have, in this case the array from the json file
  //console.log(itemArray);

  return(        
    <main>

      <div>
        <label>Sort by:</label>
        <button onClick={handleNameSort} className={`bg-orange-500 p-1 m-2 w-28 ${NameSorted}`}>Name</button>
        <button onClick={handleCategorySort} className={`bg-orange-500 p-1 m-2 w-28 ${CategorySorted}`}>Category</button>
        <button onClick={handleGroupedSort} className={`bg-orange-500 p-1 m-2 w-28 ${GroupedSorted}`}>Grouped</button>
      </div>

      <section>
        {itemArray.map((item) => (<Item item={item} key={item.id} />))}
      </section>

    </main>
  )
        
}