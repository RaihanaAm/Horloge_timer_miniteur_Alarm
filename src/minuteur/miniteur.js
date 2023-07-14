import "./miniteur.css"
import { useState, useEffect } from "react";

export const Miniteur = () => {
    // ^^ Tableau
    let hours = [];
    let minutes = [];
    let Seconds = [];
    for (let index = 0; index < 60; index++) {
        if (index < 24) {
            hours.push(index)
        }
        minutes.push(index)
        Seconds.push(index)
    }
    // ^^ miniteur
    const [miniteur, setMiniteur] = useState({
        hour: 0,
        minute: 0,
        second: 0
    })
    const [active, setActive] = useState(true)
    const [disabled, setDesabled] = useState(false);

    const value = (e) => {
        let updat = { ...miniteur }
        switch (e.target.name) {
            case "Hours":
                updat.hour = e.target.value
                break;

            case "minutes":
                updat.minute = e.target.value
                break;
            case "Seconds":
                updat.second = e.target.value
                break;
            default:
                break;
        }
        setMiniteur(updat)
    }
    const [inter, setInter] = useState()
    const start = () => {
        setInter(
            setInterval(() => {
                // console.log(miniteur);
                setMiniteur((prev) => ({
                    hour: prev.hour,
                    minute: prev.minute,
                    second: prev.second - 1
                }))

            }, 1000)
        )
        setActive(false)
        setDesabled(true)
    }
    const pause = () => {
        setDesabled(false)
        clearInterval(inter)


    }
    const reset = () => {

        setDesabled(false)
        setMiniteur({
            hour: "0",
            minute: "0",
            second: "0"
        })
        pause()



    }


    useEffect(() => {

        if (miniteur.second === 0) {
            setMiniteur((prev) => ({
                hour: prev.hour,
                minute: prev.minute - 1,
                second: 59
            }))
            console.log(1);

        } else if (miniteur.minute === 0) {
            setMiniteur((prev) => ({
                hour: prev.hour - 1,
                minute: 59,
                second: prev.second
            }))

        }

    }, [miniteur.second])

    return (
        <div>
            <div >
                <select name="Hours" id="Hours" onChange={value} >
                    <option disabled value={"hours"} selected  >Hours</option>
                    {
                        hours.map((element, index) =>
                            <option key={index} value={element} >{element}</option>
                        )
                    }
                </select>
                <select name="minutes" id="minutes" onChange={value} >
                    <option disabled value={"minutes"} selected>minutes</option>
                    {
                        minutes.map((element, index) =>
                            <option key={index} value={element}>{element}</option>
                        )
                    }
                </select>
                <select name="Seconds" id="Seconds" onChange={value}  >
                    <option disabled value={"Seconds"} selected >Seconds</option>
                    {
                        Seconds.map((element, index) =>
                            <option key={index} value={element}>{element}</option>
                        )
                    }
                </select>
            </div>

            <div>
                <h1 className={active ? "d-none" : ""}>{miniteur.hour}:{miniteur.minute}:{miniteur.second} </h1>
            </div>
            <button onClick={start} disabled={disabled}>start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pause}>stop</button>



        </div>
    )

}
// *start  miniteur

