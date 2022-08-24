import { Home, AboutPage, Desck, User, AddUser, GameLevel ,PageDontFinde} from './compnentes/pages'
import { Routes , Route} from 'react-router-dom'
export default function Router(){
return(
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<AboutPage />}/>
        <Route path='desck' element={<Desck/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='game' element={<GameLevel />}/>
        <Route path='*' element={<PageDontFinde />}/>
    </Routes>
)
}
// export default function Router({ page }) {
//     switch (page) {
//         case "home":
//             return <Home />
//         case "about":
//             return <AboutPage />
//         case "desck":
//             return <Desck time={0} desckColor={"white"} number={4} />
//         case "user":
//             return <User />
//         case "adduser":
//             return <AddUser />
//         case "game":
//             return <GameLevel />
//         default: break
//     }
// }

