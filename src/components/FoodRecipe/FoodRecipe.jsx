import Styles from "./FoodRecipe.module.scss"
import Container from "../../Container"
import Ingredients from "./Ingredients"
import { useEffect, useState } from "react"

export default function FoodRecipe({ foodId, closeModal }) {
    const [isLoading, setIsLoading] = useState(true)
    const [foodRecipe, setFoodRecipe] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const url = `https://api.spoonacular.com/recipes/${foodId}/information`

    const API_KEY = "0fb32bcda49e426d8184426d50e023fa"
    /* const API_KEY = "eb384f771df44d48b6131218054b88c0" */

    useEffect(() => {
        async function fetchFoodRecipe() {
            const res = await fetch(`${url}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFoodRecipe(data)
            setIsLoading(false)
            setIsVisible(true)
            document.body.style.overflow = "hidden"
        }
        fetchFoodRecipe()

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [foodId])

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => {
            closeModal()
        }, 300)
    }

    return (
        <div className={`${Styles.foodrecipe} ${isVisible ? Styles.open : ""}`}>
            <button
                className={Styles.foodrecipeclose}
                onClick={handleClose}
            >
                x
            </button>
            <div className={Styles.foodrecipewrapper}>
                <div className={Styles.foodrecipetop}>
                    <h3>{foodRecipe.title}</h3>
                    <div className={Styles.foodrecipeimg}>
                        <img
                            src={foodRecipe.image}
                            alt={foodRecipe.title}
                        />
                    </div>
                </div>

                <div className={Styles.foodrecipeinfo}>
                    <p>
                        <strong>Ready in:</strong> ⏲️
                        {foodRecipe.readyInMinutes}
                        minutes
                    </p>
                    <p>
                        <strong>Servings:</strong> 🍽️
                        {foodRecipe.servings}
                    </p>
                    <p>
                        <strong>Price:</strong> 💰
                        {(foodRecipe.pricePerServing / 100).toFixed(2)}$
                    </p>
                    <p>
                        <strong>Vegeterian: </strong>
                        {foodRecipe.vegetarian ? "🥕 Yes" : "🍖 No"}
                    </p>
                    <p>
                        <strong>Vegan: </strong>
                        {foodRecipe.vegan ? "🌿 Yes" : "🍖 No"}
                    </p>
                    <p>
                        <strong>Gluten Free: </strong>
                        {foodRecipe.glutenFree ? "✅ Yes" : "❌ No"}
                    </p>
                </div>

                <Ingredients
                    foodRecipe={foodRecipe}
                    isLoading={isLoading}
                />

                <div className={Styles.foodrecipedescr}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <h4>Instructions</h4>

                            <ol>
                                {foodRecipe.analyzedInstructions &&
                                foodRecipe.analyzedInstructions[0] ? (
                                    foodRecipe.analyzedInstructions[0].steps.map(
                                        (step, index) => (
                                            <li key={index}>{step.step}</li>
                                        )
                                    )
                                ) : (
                                    <p>No instructions available.</p>
                                )}
                            </ol>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
