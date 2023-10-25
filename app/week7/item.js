
//Updated item function, where the whole item is declared , and the styling is input here rather than repeating it
//updated through learning from week 5! and communicating with different classmates to improve my efficiency and cleanliness through suggestions and tips
export default function Item ({item}) {
    return(
        <main className="font-bold px-2 py-2 w-96 text-black bg-green-400 
        border-2 border-black m-4 rounded hover:bg-green-700">
            
            <h1>{item.name}</h1>
            <p>buy {item.quantity} in {item.category}</p>
        </main>
    );
}