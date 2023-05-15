import { useState } from "react"

export default function Word(props) {

    function chooseWord() {
        let palavra = Math.floor(Math.random() * props.palavras.length);
        let newWord = props.palavras[palavra].split('')
        

        props.setWordGame(newWord)
        props.setNewWordUnderline('_ '.repeat(newWord.length))
        
        
        props.setSelected([])
        props.setContador(0)
        props.setnewGame(false)
        props.setFinished()
    }
    return (
        <div class="word">
            <button onClick={chooseWord}>Escolher Palavra</button>
            <p className={props.finished}>{props.newWordUnderline}</p>
        </div>
    )
}


