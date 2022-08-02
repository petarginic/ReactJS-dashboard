import React, {useState, useRef} from 'react'

import { motion } from "framer-motion";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from '../components/Header';
import { Button } from '@mui/material';
import { useStateContext } from "../contexts/ContextProvider";


const Calendar = () => {

    const [calendarType, setCalendarType] = useState("dayGridMonth");

    const {theme} = useStateContext();

    const calendarRef = useRef();
    const calendarApi = () => calendarRef.current?.getApi();
    
    const onCalendarTypeChange = (value) => {
        setCalendarType(value);

        switch(value) {
            case "dayGridMonth":
                calendarApi().changeView("dayGridMonth");
                break;
            case "timeGridWeek":
                calendarApi().changeView("timeGridWeek");
                break;
            case "timeGridDay":
                calendarApi().changeView("timeGridDay");
                break;
            default:
                throw Error("Invalid calendar view type");
        }
    }

  return (
        <>
        <Header title="Calendar" description="Check out your schedule. "/>

            <div className='flex justify-center items center pt-5 gap-3'>          
                <Button size="small"  variant={calendarType === "timeGridDay" ? "contained" : "outlined"} onClick={() => onCalendarTypeChange("timeGridDay")}>           
                        Day
                </Button>
                <Button size="small" variant={calendarType === "timeGridWeek" ? "contained" : "outlined"} onClick={() => onCalendarTypeChange("timeGridWeek")} >
                        Week
                </Button>
                <Button size="small" variant={calendarType === "dayGridMonth" ? "contained" : "outlined"} onClick={() => onCalendarTypeChange("dayGridMonth")}>
                        Month
                </Button>
            </div>

            <div className="flex  justify-center items-center p-12 container h-100">
                <motion.div
                    className="w-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                >
                    <FullCalendar
                        style={{ color: theme.title}}
                        eventTextColor={theme.title}
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                        headerToolbar={false}
                        initialView={calendarType}
                        editable
                        selectable
                        selectMirror
                        dayMaxEvents
                        weekends
                        eventColor='blue'
                    />                  
                </motion.div>              
            </div>
        </>
    )
}

export default Calendar