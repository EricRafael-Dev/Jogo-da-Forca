
export default function Letras({ tentativas, setTentativas }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const buttons = alfabeto.map(letter => <button onClick={() => setTentativas(tentativas + 1)}> {letter.toUpperCase()}</button>)
    return (
        <div class="game">
            <div class="keyboard">
                {buttons}
            </div>
        </div>
    )
}