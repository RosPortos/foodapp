import { useEffect, useState } from "react"
import Styles from "./Search.module.scss"
import Container from "../../Container"

const API_KEY = "0fb32bcda49e426d8184426d50e023fa"
/* const API_KEY = "eb384f771df44d48b6131218054b88c0" */
const API_URL = `https://api.spoonacular.com/recipes/complexSearch`

export default function Search({ foodDate, setFoodDate }) {
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function fechFood() {
            const res = await fetch(
                `${API_URL}?query=${search}&apiKey=${API_KEY}`
            )
            const data = await res.json()
            console.log(data.results)
            setFoodDate(data.results)
        }
        fechFood()
    }, [search])

    return (
        <div className={Styles.search}>
            <Container>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for a recipe"
                />
            </Container>
        </div>
    )
}
