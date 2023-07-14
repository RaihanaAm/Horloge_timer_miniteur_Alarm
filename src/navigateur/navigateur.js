import { NavLink } from "react-router-dom"
import "./navigateur.css"
import { LuAlarmClock } from "react-icons/lu";
import { RiTimerFlashLine } from "react-icons/ri";
import { Tb24Hours } from "react-icons/tb";
import { PiHourglassMediumFill } from "react-icons/pi";






export const Navigateur = () => {
    return (
        <>

            <nav className="nav">

                <NavLink className="lien" to={"/"}>
                    <h5 className="name">Horloge</h5>
                    <Tb24Hours className="icon" />
                </NavLink>

                <NavLink className="lien" to={"/alarm"}>
                    <h5 className="name">Alarm</h5>
                    <LuAlarmClock className="icon" />
                </NavLink>


                <NavLink className="lien" to={"/chrono"}>
                    <h5 className="name">Chrono</h5>
                    <RiTimerFlashLine className="icon" />
                </NavLink>

                <NavLink className="lien" to={"/miniteur"}>
                <h5 className="name">Miniteur</h5>
                    <PiHourglassMediumFill className="icon" />
                </NavLink>

            </nav>
        </>
    )
}