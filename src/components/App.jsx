import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "../palavras"

export default function App() {
    const palavra = Math.floor(Math.random() * palavras.length);
    return (
        <div>
            <Jogo palavra={palavras[palavra]}/>
            <Letras />
        </div>
    )
}