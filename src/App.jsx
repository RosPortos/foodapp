import "./App.scss"

import { useState } from "react"
import Search from "./components/Search/Search"
import FoodList from "./components/FoodList/FoodList"
import Nav from "./components/Nav/Nav"
import FoodRecipe from "./components/FoodRecipe/FoodRecipe"

function App() {
    const [foodDate, setFoodDate] = useState([])
    const [foodId, setFoodId] = useState("716429")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="App">
            <div
                onClick={closeModal}
                className={isModalOpen ? "overlay active" : "overlay"}
            ></div>
            <Nav />
            <Search setFoodDate={setFoodDate} />
            <FoodList
                openModal={openModal}
                setFoodId={setFoodId}
                foodDate={foodDate}
            />
            {isModalOpen && (
                <FoodRecipe
                    foodId={foodId}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default App
