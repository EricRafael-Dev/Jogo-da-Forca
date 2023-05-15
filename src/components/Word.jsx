import { useState } from "react"

export default function Word(props) {
    let [word, setWord] = useState('')

    function chooseWord() {
        let palavra = Math.floor(Math.random() * props.palavras.length);
        let newWord = props.palavras[palavra].split('')
        let newWordUnderline = '_ '.repeat(newWord.length)

        console.log(newWord)

        setWord(newWordUnderline)
    }

    return (
        <div class="word">
            <button onClick={chooseWord}>Escolher Palavra</button>
            <p>{word}</p>
        </div>
    )
}


