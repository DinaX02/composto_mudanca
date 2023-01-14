import React, {useState} from "react";
import './Calendario.css'
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";


const locales = {
    "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Equipa 2",
        allDay: true,
        start: new Date(2023, 1, 11),
        end: new Date(2023, 1, 16),

    },
    {
        title: "Equipa 3",
        allDay: true,
        start: new Date(2023, 1, 16),
        end: new Date(2023, 1, 21),

    },
    {
        title: "Equipa 1",
        allDay: true,
        start: new Date(2023, 1, 22),
        end: new Date(2023, 1, 27),

    }
]


function Calendario() {

    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""});
    const [allEvent, setAllEvent] = useState((events))

    function handleAddEvent() {
        setAllEvent([...allEvent, newEvent])
    }

    return (

        <div className='compCalendario'>
            <h1>Turnos</h1>
            <h2>Adiciona um novo turno</h2>
            <div>
                <input
                    type="text"
                    placeholder="Adiciona Turno"
                    style={{width: "20%", marginRight: "10px"}}
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
            </div>
            <DatePicker
                placeholderText="Start Date"
                style={{marginRight: "10px"}}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({...newEvent, start})}
            />
            <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({...newEvent, end})}
            />
            <button style={{marginTop: "10px"}} onClick={handleAddEvent}>
                Adicionar Turno
            </button>

            <Calendar
                localizer={localizer}
                events={allEvent}
                startAcessor="start"
                endAcessor='end'
                style={{height: "500px", margin: "50px"}}
            />
        </div>
    );
}

export default Calendario;
