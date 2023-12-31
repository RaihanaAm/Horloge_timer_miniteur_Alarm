import "./alarm.css"
import React, { useEffect, useState } from 'react';
import notif from "../assets/images/notif.jpg"
import { MdDelete } from "react-icons/md";

export const Alarm = () => {
    const [active, setActive] = useState(true);
    const [newR, setNewR] = useState({
        name: "Alarm",
        time: "06:00"
    })

    const [newAlarm, setNewAlarm] = useState([])

    const displayNone = () => {
        setActive(!active)
    }
    const getTime = (e, set) => {
        set((prev) => ({
            name: prev.name,
            time: e.target.value
        }));
    }
    const getData = (e, set) => {
        set((prev) => ({
            name: e.target.value,
            time: prev.time
        }));
    }
    const remove = (index) => {
        const newTab = [...newAlarm]
        newTab.splice(index, 1)
        setNewAlarm(newTab)
    }
    const valuer = () => {
        // console.log(newR.time);
        // console.log(newR.name);
        setNewR({
            name: "Alarm",
            time: "06:00"
        });
        const NewTab = [...newAlarm];
        NewTab.push(newR);
        setNewAlarm(NewTab);
    }



    const [currentHour, setCurrentHour] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds()
    })

    const formattedHour = currentHour.hour.toString().padStart(2, "0");
    const formattedMinute = currentHour.minute.toString().padStart(2, "0");
    const formattedSeconde = currentHour.second.toString().padStart(2, "0");


    const verify = () => {
        setCurrentHour({
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        })
        setInterval(() => {
            setCurrentHour((prev) => ({
                hour: prev.hour,
                minute: prev.minute,
                second: prev.second + 1
            }))
        }, 1000);
    }


    useEffect(() => {
        if (formattedSeconde === "59") {
            setCurrentHour((prev) => ({
                hour: prev.hour,
                minute: prev.minute + 1,
                second: 0
            }))
        } else if (formattedMinute === "59") {
            setCurrentHour((prev) => ({
                hour: prev.hour + 1,
                minute: 0,
                second: prev.second
            }))
        } else {
            if (formattedHour === "24") {
                setCurrentHour((prev) => ({
                    hour: 0,
                    minute: prev.minute,
                    second: prev.second
                }))
            }
        }
        return () => {

            for (let index = 0; index < newAlarm.length; index++) {

                let time = `${formattedHour}:${formattedMinute}`
                const element = newAlarm[index];
                if (time === element.time && formattedSeconde === "00") {
                    alert(`alarm ${element.name} est arriver`)
                    console.log(time);
                }
            }
        }
    }, [currentHour.second])






    return (
        <div className="alarm">
            {/* page 1 */}
            <div className={!active ? "d-none " : ""} >
                <div className="titleAlarm">
                    <h1 className="logos" >My Alarm</h1>
                    <div className='btnAlarm'>
                        <button onClick={displayNone} className='addAlarm'>Add new alarm</button>
                    </div>
                </div>
                <div className="im">
                    <img className={`image  ${newAlarm.length === 0 ? "" : "d-none"}`} src={notif} alt="jj" />
                </div>
                <div className="Allalarms">
                {
                    newAlarm.map((element, index) =>
                        <div key={index} className='finaleAlarm '>
                            <div >
                                <h1 className='alarmTime'> {element.time}</h1>
                                <p className='alarmName'>{element.name}</p>
                            </div>
                            <h3 className="delete" onClick={() => { remove(index) }}><MdDelete /> </h3>
                        </div>
                    )
                }
                </div>

            </div>
            {/* page 2 */}
            <div className='flex '>

                <div className={`setAlarm flex ${active ? "d-none " : ""}`}>
                    <h5 className='newAlarm flex'>New alarm</h5>
                    <h6 onClick={displayNone} className='annuler'>Annuler</h6>
                    <div className='flex'>
                        <input type="time" className='AlarmTime' value={newR.time} onChange={(e) => { getTime(e, setNewR) }} required />
                    </div>
                    <div className='inputName'>
                        <label className="inputTitle">Alarm name</label>
                        <input type="text" className="addName" value={newR.name} onChange={(e) => { getData(e, setNewR) }} />
                    </div>

                    <div className='flex'>
                        <button onClick={() =>{ displayNone(); valuer(); verify() }} className='enregAlarm'>Enregistrer</button>
                    </div>

                </div>
            </div>

        </div>
    )

}

// //* start alarm

