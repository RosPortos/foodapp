import FoodItem from "../FoodItem/FoodItem"
import Styles from "./FoodList.module.scss"
import Container from "../../Container"

export default function FoodList({ foodDate, setFoodId, openModal }) {
    return (
        <div className={Styles.foodlist}>
            <Container>
                <h2>List Recipes</h2>
                <ul>
                    {foodDate.map((food) => (
                        <FoodItem
                            openModal={openModal}
                            key={food.id}
                            food={food}
                            setFoodId={setFoodId}
                        />
                    ))}
                </ul>
            </Container>
        </div>
    )
}
