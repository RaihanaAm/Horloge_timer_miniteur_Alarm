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



    const count = () => {
        if (tru) {
            setRr(
                setInterval(() => {
                    setChrono((prevChrono) => ({
                        hour: prevChrono.hour,
                        minute: prevChrono.minute,
                        second: prevChrono.second + 1
                    }))
                }, 1000)
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
    return (
        <div className="global flex">
            <div className="tops"></div>
            <div className="top"></div>
            <div className="glob   flex">
                <div className="flex glo">
                    <h1 className="flex h1">{formattedHour}:{formattedminute}:{formattedsecond}</h1>
                    <div className="mt-3" >
                        <button className="btn btn-success" onClick={count} disabled={disabled}>Play</button>
                        <button className="btn ms-1 btn-warning" onClick={stop} >Stop</button>
                        <button className="btn ms-1 btn-danger" onClick={reset} >Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}