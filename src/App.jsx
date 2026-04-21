import './App.css'
import Room from "./components/Bedroom"
import Office from "./components/Office"
import Kitchen from './components/Kitchen'
import LivingRoom from './components/LivingRoom'
function App() {
  return (
    <>
    <h1>This is my Apartment!</h1>
    <section>
    <Room/>
    <Office/>
    </section>
    <section>
      <LivingRoom/>
      <Kitchen/>
    </section>
    </>
  )
}

export default App
