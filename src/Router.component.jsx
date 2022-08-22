import { Home, AboutPage, Desck} from './compnentes/pages/games'
export default function Router({ page }) {
    switch (page) {
        case "home":
            return <Home />
        case "about":
            return <AboutPage />            
            case "desck":
                return <Desck time={0} desckColor={"white"} number={4} />
        default: break
    }
}

