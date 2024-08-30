import Container from "../../Container"
import Styles from "./Nav.module.scss"

export default function Nav() {
    return (
        <nav className={Styles.nav}>
            <Container>
                <h1>Food App &#x1F35D;</h1>
            </Container>
        </nav>
    )
}
