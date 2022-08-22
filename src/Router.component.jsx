import { Home, AboutPage, Desck, User, AddUser, GameLevel } from './compnentes/pages'
export default function Router({ page }) {
    switch (page) {
        case "home":
            return <Home />
        case "about":
            return <AboutPage />
        case "desck":
            return <Desck time={0} desckColor={"white"} number={4} />
        case "user":
            return <User />
        case "adduser":
            return <AddUser />
        case "game":
            return <GameLevel />
        default: break
    }
}

