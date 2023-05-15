import { useState } from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "../palavras"

export default function App() {

    const [contador, setContador] = useState(0)

    return (
        <div>
            <Jogo palavras={palavras} />
            <Letras contador={contador} setContador={setContador}/>
        </div>
    )
}