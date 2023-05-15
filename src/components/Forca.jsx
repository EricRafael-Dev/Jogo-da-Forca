export default function Forca({contador={contador}}) {
    const link = `./assets/forca${contador}.png`
    return (
        <img src={link} alt={contador} />
    )
}