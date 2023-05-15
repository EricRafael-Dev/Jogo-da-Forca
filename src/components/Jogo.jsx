import Forca from "./Forca"
import Word from "./Word"

export default function Jogo(props) {
    return (
        <div class="top">
            <Forca contador={props.contador}/>
            <Word finished={props.finished} setFinished={props.setFinished} newGame={props.newGame} setnewGame={props.setnewGame} newWordUnderline={props.newWordUnderline} setNewWordUnderline={props.setNewWordUnderline} setSelected={props.setSelected} palavras={props.palavras} setContador={props.setContador} wordGame={props.wordGame} setWordGame={props.setWordGame}/>
        </div>
    )
}