import { useState } from "react"

function Computer() {
    const [show, setShow] = useState(false)
    return (
        <div className={!show ? "clickable" : ""} onClick={() => setShow(!show)}>
            A black computer case.
            {show && <ul>
                <li>Intel 11700K</li>
                <li>RTX 3060</li>
                <li>2x16GB DDR5-4600</li>
            </ul>}
        </div>
    )
}
function Pillow() {
    return (
        <>
        <li>A Pillow!</li>
        <li>A sleeping Cat</li>
        </>
    )

}
export default {
    Computer,
    Pillow
}