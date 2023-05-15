import { useState } from "react"
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "../palavras"

export default function Display() {

    const [newGame,setnewGame] = useState(true)
    const [finished, setFinished] = useState()
    const [contador, setContador] = useState(0)
    const [wordGame, setWordGame] = useState()
    const [selected, setSelected] = useState([])
    let [newWordUnderline, setNewWordUnderline] = useState()

    return (
        <div>
            <Jogo finished={finished} setFinished={setFinished} newGame={newGame} setnewGame={setnewGame} newWordUnderline={newWordUnderline} setNewWordUnderline={setNewWordUnderline} setSelected={setSelected} palavras={palavras} wordGame={wordGame} setWordGame={setWordGame} contador={contador} setContador={setContador}/>
            <Letras finished={finished} setFinished={setFinished} newGame={newGame} setnewGame={setnewGame} newWordUnderline={newWordUnderline} setNewWordUnderline={setNewWordUnderline} selected={selected} setSelected={setSelected} contador={contador} setContador={setContador} wordGame={wordGame}/>
            <span>{wordGame}</span>
            <span>{contador}</span>
        </div>
    )
}