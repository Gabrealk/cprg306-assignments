"use client";
import react, {useEffect, useState } from "react";


export default function mealList({ingredient}){

    //holds list of meal ideas through an empty array
    const [meals, setMeals] = useState([])

    const fetchMealIdeas = async (ingredient) => {
        try
        {
            //trys and pulls meals from the website/API
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json
            return data.meals || [];
        }
        catch(error)
        {
            //catches if an error occurs with a message
            console.error("error fetching meal ideas: ", error);
            return[];
        }
    };

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return(
        <main>
            <h2>Meal ideas with {ingredient}:</h2>
            <ul>
                {meals.map((meal) =>
                <li key={meal.idmeal}> {meal.strMeal} </li>)}
            </ul>
            
        </main>
    )
}







