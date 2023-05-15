import Forca from "./Forca"
import Word from "./Word"

export default function Jogo(props) {
    return (
        <div class="top">
            <Forca />
            <Word palavra={props.palavra}/>
        </div>
    )
}