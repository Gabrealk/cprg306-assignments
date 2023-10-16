
//Updated item function, where the whole item is declared , and the styling is input here rather than repeating it
//updated through learning from week 5! and communicating with different classmates to improve my efficiency and cleanliness through suggestions and tips
export default function Item ({item}) {
    return(
        <main className="font-bold px-7 py-2 text-black bg-green-400 
        border-2 border-black m-4 rounded hover:bg-green-700">
            
            <h1>{item.name}</h1>
            <p>The amount of items there are is: {item.quantity}</p>
            <p>The Item belongs in the {item.category} category</p>
        </main>
    );
}