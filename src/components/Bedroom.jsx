import { Bed, Dresser, Nightstand } from "./Furniture"
export default function Bedroom() {
    return (
        <div className="room">
            <h2>Bedroom</h2>
            <Bed />
            <Dresser />
            <Nightstand />
        </div>
    )
}