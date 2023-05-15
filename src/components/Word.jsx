export default function Word(props) {
    return (
        <div class="word">
            <button>Escolher Palavra</button>
            <p>{props.palavra}</p>
        </div>
    )
}