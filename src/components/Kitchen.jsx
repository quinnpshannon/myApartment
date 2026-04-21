import { Fridge, Pantry } from "./Furniture"
export default function Kitchen() {
    return (
        <div className="room">
            <h2>Kitchen</h2>
            <Fridge />
            <Pantry />
        </div>
    )
}