import "./chrono.css"

import { useState } from "react";
export const Chrono = () => {
    const [chrono, setChrono] = useState({
        hour: 0,
        minute: 0,
        second: 0
    });
    const formattedHour = chrono.hour.toString().padStart(2, "0");
    const formattedminute = chrono.minute.toString().padStart(2, "0");
    const formattedsecond = chrono.second.toString().padStart(2, "0");
    const [tru, setTru] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [rr, setRr] = useState()
    const [time, setTime] = useState([])




    const count = () => {
        if (tru) {
            setRr(
                setInterval(() => {
                    setChrono((prevChrono) => ({
                        hour: prevChrono.hour,
                        minute: prevChrono.minute,
                        second: prevChrono.second + 1
                    }))
                }, 20)
            )
            setDisabled(true)
        }
    }
    const stop = () => {
        setTru(false);
        clearInterval(rr)
        setTru(true)
        setDisabled(false)

    }
    const reset = () => {
        setChrono({
            hour: 0,
            minute: 0,
            second: 0
        })
        stop();
        setDisabled(false)
        setTime([])


    }
    const Tour = () => {
        let tour = `${formattedHour}:${formattedminute}:${formattedsecond}`
        let timees={
            hour:formattedHour,
            minute:formattedminute,
            second:formattedsecond
        }
// loop
        let update = [...time];
        update.push(tour)
        setTime(update)
    }

    if (formattedsecond === "60") {
        setChrono((prevChrono) => ({
            hour: prevChrono.hour,
            minute: prevChrono.minute + 1,
            second: 0
        }))
    } else if (formattedminute === "60") {
        setChrono((prevChrono) => ({
            hour: prevChrono.hour + 1,
            minute: 0,
            second: 0
        }))
    }
    console.log(time.length);
    return (
        <div className="Chronos flex">
            <div className="titles">
                <h3 className="title">Minutes</h3>
                <h3 className="title">Seconds</h3>
                <h3 className="title">MSecondes</h3>
                <div className="houres">
                    <h3 className="hour">{formattedHour}</h3>
                    <h3 className="hour">{formattedminute}</h3>
                    <h3 className="hour">{formattedsecond}</h3>
                </div>
            </div>

            <div className="Chrono flex">
                <h1 className="ChronoTime"><span className="numbers">00</span>:<span className="numbers">00</span>:<span className="numbers">00</span></h1>
            </div>
            <div className={ time.length===0 ? "none" :"records"}>
                <div className="tours">
                    <h3 className="tour">Tour</h3>
                    <h3 className="tour">Temps au tour</h3>
                </div>
                {
                    time.map((element, index) =>
                        <h5 className=" record"><span className="order">{index + 1}</span> <span className="orde">{element}</span> </h5>
                    )
                }
            </div>





            <div className="btnn" >
                <button className="button play" onClick={count} disabled={disabled}>Play</button>
                <button className="button Tour" onClick={Tour} disabled={!disabled} >Tour</button>
                <button className="button stop" onClick={stop} >Stop</button>
                <button className="button reset" onClick={reset} >Reset</button>
            </div>

        </div>
    )
}

