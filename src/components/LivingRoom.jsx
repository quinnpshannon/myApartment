import { Endtable, TVStand, Couch } from "./Furniture"
export default function LivingRoom() {
    return (
        <div className="room">
            <h2>Living Room</h2>
            <TVStand />
            <Couch />
            <Endtable />
        </div>
    )
}