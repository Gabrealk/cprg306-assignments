

export default function Item ({item}) {
    return(
        <main>
            <h1>{item.name}</h1>
            <p>The amount of items there are is: {item.quantity}</p>
            <p>The Item belongs in the {item.category} category</p>
        </main>
    );
}