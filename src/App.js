import "./app.css";
import { Alarm } from "./alarm/alarm"
import { Chrono } from "./chrono/chrono"
import { Horloge } from "./horloge/horloge"
import { Miniteur } from "./minuteur/miniteur"
import { Route, Routes } from "react-router-dom"
import { Navigateur } from "./navigateur/navigateur"


export const App = () => {
  // let body = document.body
  // body.style.backgroundColor = "red"
  return (
    <>

      <Navigateur/>

      <Routes>
        {/* <Route path="*" element={<Error />} /> */}
        <Route exact path="/" element={<Horloge />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/chrono" element={<Chrono />} />
        <Route path="/miniteur" element={<Miniteur />} />
      </Routes>





    </>
  )
}