import "./horloge.css"

// ** start horloge
import { useEffect, useState } from "react"


export const Horloge = () => {

    const [hour, setHour] = useState({
        Date: new Date().toDateString(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds()
    });
    const formattedHour = hour.hour.toString().padStart(2, "0");
    const formattedMinute = hour.minute.toString().padStart(2, "0");
    const formattedSecond = hour.second.toString().padStart(2, "0");
    console.log(+formattedHour+1);


    //^^ methode with btn
    const horloge = () => {
        setInterval(() => {
            setHour((prevHorloge) => ({
                Date: new Date().toDateString(),
                hour: prevHorloge.hour,
                minute: prevHorloge.minute,
                second: prevHorloge.second + 0.5
            }))

        }, 1000);

    }

    if (formattedSecond === "60") {
        setHour((prevHorloge) => ({
            Date: new Date().toDateString(),
            hour: prevHorloge.hour,
            minute: prevHorloge.minute + 1,
            second: 0

        }))
    } else if (formattedMinute === "60") {
        setHour((prevHorloge) => ({
            Date: new Date().toDateString(),
            hour: prevHorloge.hour + 1,
            minute: 0,
            second: 0
        }))
    }
    useEffect(() => {
        horloge();
    }, []);

    return (
        <div className="horloge flex">
            <div className="exacte flex">
                <h3>Morocco</h3>
                <h1 className="hourExact">{formattedHour}:{formattedMinute}:<span className="seconds">{formattedSecond}</span></h1>
                <h5 className="">{hour.Date}</h5>
            </div>

            <div className="allCountries">
                <div className="mondial" >
                    <p className="contiresName">New York, États-Unis</p>
                    <hr />
                    <h1 className="heurCountries">{+formattedHour-5===24 ? 0 :+formattedHour-5}:{formattedMinute}:<span className="seconds">{formattedSecond}</span></h1>
                    <p className="decalage">Aujourd'hui,-5H</p>

                </div>
                <div className="mondial" >
                    <p className="contiresName">Moscou, Russie</p>
                    <hr />
                    <h1 className="heurCountries">{+formattedHour+2===24 ? 0 :+formattedHour+2}:{formattedMinute}:<span className="seconds">{formattedSecond}</span></h1>
                    <p className="decalage">Aujourd'hui,+2H</p>

                </div><div className="mondial" >
                    <p className="contiresName">Tokyo, Japon</p>
                    <hr />
                    <h1 className="heurCountries">{+formattedHour+8===24 ? 0 :+formattedHour+8}:{formattedMinute}:<span className="seconds">{formattedSecond}</span></h1>
                    <p className="decalage">Aujourd'hui,+8H</p>

                </div><div className="mondial" >
                    <p className="contiresName">Berlin, Allemagne</p>
                    <hr />
                    <h1 className="heurCountries">{+formattedHour+1===24 ? 0 :+formattedHour+1}:{formattedMinute}:<span className="seconds">{formattedSecond}</span></h1>
                    <p className="decalage">Aujourd'hui,+1H</p>

                </div>



            </div>
        </div>
    )
}