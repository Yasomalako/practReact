import { Home, AboutPage, Desck, User, GameLevel, PageDontFinde } from './compnentes/pages'
import { Routes, Route, } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
export const textContet = createContext()

export default function Router() {
    const [text, setText] = useState([])
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Jeck99/fake-server/devices`)
            .then(res => res.json())
            .then(response => console.log(response))},[]);
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='desck' element={<Desck />} />
            <Route path='user' element={<User />} />
            <Route path='game' element={<GameLevel />} />
            <Route path='*' element={<PageDontFinde />} />
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

