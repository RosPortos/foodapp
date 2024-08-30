import Styles from "./FoodRecipe.module.scss"

export default function Ingredients({ foodRecipe, isLoading }) {
    return (
        <>
            {isLoading ? (
                <div className={Styles.foodrecipeingredients}>
                    <h3>Loading...</h3>
                </div>
            ) : (
                <div className={Styles.foodrecipeingredients}>
                    <h4>Ingredients</h4>
                    <ul>
                        {foodRecipe.extendedIngredients.map((item) => (
                            <li key={item.id}>
                                <div
                                    className={Styles.foodrecipeingredientsimg}
                                >
                                    <img
                                        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                                        alt={item.name}
                                    />
                                </div>
                                <p
                                    className={
                                        Styles.foodrecipeingredientstitle
                                    }
                                >
                                    {item.name}
                                </p>
                                <p
                                    className={
                                        Styles.foodrecipeingredientsamount
                                    }
                                >
                                    {item.amount}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
