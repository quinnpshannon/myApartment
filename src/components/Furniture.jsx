import { useState } from "react";
import Stuff from "./Stuff";
export function Bed() {
    const [show, setShow] = useState(false)
    return (
        <div className={!show ? "clickable" : ""} onClick={() => setShow(!show)}>
            <h3>Bed</h3>
            {show && <ul>
                <Stuff.Pillow />
            </ul>}
        </div>
    )
}
export function Nightstand() {
    const [show, setShow] = useState(false)
    return (
        <div className={!show ? "clickable" : ""} onClick={() => setShow(!show)}>
            <h3>Nightstand</h3>
            {show && <>
            <h4>Snow Crash, by Neal Stephenson</h4>
            <h4>An unplugged USB-C Cable</h4>
            </>}
        </div>
    )
}
export function Dresser() {
    const [show, setShow] = useState(false)
    return (
        <div className={!show ? "clickable" : ""} onClick={() => setShow(!show)}>
            <h3>Dresser</h3>
            {show && <ul>
                <li>Anime Shirts</li>
                <li>Cargo Pants</li>
            </ul>}
        </div>
    )
}
export function Endtable() {
    return (
        <div>
            <h3>Endtable</h3>
            <ul>
            <li>A Lamp</li>
            <li>The TV Remote</li>
            </ul>
        </div>
    )
}
export function TVStand() {
    return(<h3>Television
    </h3>)
}
export function Couch() {
    const [show, setShow] = useState(false)
        return (
        <div onClick={() => setShow(!show)}>
            <h3>Couch</h3>
            {show && <p>Hidden Change! Nice!</p>}
        </div>
    )
}
export function Chair() {
    return (
        <h3>Desk Chair</h3>
    )
}
export function Desk() {
    return (
        <div>
            <h3>Desk</h3>
            <h4>Cup of Pens</h4>
            <Stuff.Computer />
        </div>
    )
}
export function Fridge() {
    const [show, setShow] = useState(false)
    return (
        <div className={!show ? "clickable" : ""} onClick={() => setShow(!show)}>
            <h3>Fridge</h3>
            {show && <ul>
                <li>Tofu</li>            
                <li>Almond Milk</li>            
                <li>Tube of Cinnamon Rolls</li>            
                <li>Broccoli</li>            
            </ul>}
        </div>
    )
}
export function Pantry() {
    const [show, setShow] = useState(false)
    return (
        <div className={!show ? "clickable" : ""} onClick={() => setShow(!show)}>
            <h3>Pantry</h3>
            {show && <ul>
                <li>Instant Ramen</li>            
                <li>40 pound bag of Sushi Rice</li>            
                <li>Cans of Chickpeas</li>            
                <li>Half-Empty box of Fruit Roll-Ups</li>            
            </ul>}
        </div>
    )
}