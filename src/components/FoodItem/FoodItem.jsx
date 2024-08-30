import Styles from "./FoodItem.module.scss"

export default function FoodItem({ food, setFoodId, openModal }) {
    return (
        <li
            className={Styles.fooditem}
            key={food.id}
        >
            <img
                src={food.image}
                alt={food.title}
            />
            <h3>{food.title}</h3>
            <button
                onClick={() => {
                    setFoodId(food.id)
                    openModal()
                }}
            >
                View Recipe
            </button>
        </li>
    )
}
