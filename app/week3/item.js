

export default function Infoshoppinglist(){
    return(
        <main>
            <li>
                <ol><Item name = "orange juice" age = "2 weeks" category= "liquid" /></ol>
                <ol><Item name = "" age = "" category= "" /></ol>
                <ol><Item name = "" age = "" category= "" /></ol>


            </li>

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