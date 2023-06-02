
export default function Letras(props) {
    let palavradojogo;
    const setFinished = props.setFinished
    const newGame = props.newGame;
    const setnewGame = props.setnewGame;
    const selected = props.selected;
    const setSelected = props.setSelected;
    const newWordUnderline = props.newWordUnderline;
    const setNewWordUnderline = props.setNewWordUnderline;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const buttons = alfabeto.map((letter, indice) => <button className={`tecla ${newGame ? 'disabled' : (selected.includes(indice) ? 'disabled' : '')} `} disabled={newGame ? true : (selected.includes(indice) ? true : false)} onClick={() => verifyLetter(letter, indice)} data-test='verifyLetter'> {letter.toUpperCase()}</button>)

    for(let i =0; i<newWordUnderline.length; i++){
        palavradojogo = palavradojogo + newWordUnderline.replace(' ', '')

    } 
    if (props.contador === 6) {
        setnewGame(true)
        setFinished('lose')
    } else if (newWordUnderline.replace(' ', '') == props.wordGame) {
        console.log(palavradojogo);
    }

    function verifyLetter(letter, indice) {
        setSelected([...selected, indice])
        let wordDiscovery = newWordUnderline
        let verify = false

        for (let i = 0; i < props.wordGame.length; i++) {
            if (letter === props.wordGame[i]) {
                verify = true
                wordDiscovery = replaceStr(wordDiscovery, i, letter)
                setNewWordUnderline(wordDiscovery)
                
            }
        }
        if (verify == false) {
            props.setContador(props.contador + 1)
        }
    }

    function replaceStr(str, i, newCaractere) {
        return str.slice(0, i * 2) + newCaractere + str.slice(i * 2 + 1)
    }

    return (
        <div class="game">
            <div class="keyboard">
                {buttons}
            </div>
        </div>
    )
}