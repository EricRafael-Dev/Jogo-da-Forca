
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "../palavras"

export default function App() {


    return (
        <div>
            <Jogo palavras={palavras} />
            <Letras />
        </div>
    )
}