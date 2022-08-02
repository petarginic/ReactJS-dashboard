import React, {useState} from 'react'

import { motion } from "framer-motion";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from '../components/Header';
import { Button } from '@mui/material';
import { useStateContext } from "../contexts/ContextProvider";


const Calendar = () => {

    const {theme} = useStateContext();

    const [valueCalendar,setValueCalendar] = useState({
        day:false,
        week: false,
        month:false
    })
    
    const [active, setActive] = useState({

        day: false,
        week: false,
        month: true
    })

    const handleOnDay = () => {

        setValueCalendar({day:true})
        setActive({ day: true})
        
        
    }

       const handleOnWeek = () => {
        setActive({ week: true})
        setValueCalendar({week:true})
  
    }

       const handleOnMonth = () => {
        setActive({ month: true})
        setValueCalendar({month:true})     
    }

  return (
    <>
    <Header title="Calendar" description="Check out your schedule. "/> 
        <div className='flex justify-center items center pt-5 gap-3'>
            <Button size="small"  variant={active.day ? "contained" : "outlined"} onClick={ handleOnDay }>           
                    Day
            </Button>
            <Button size="small" variant={active.week ? "contained" : "outlined"} onClick={ handleOnWeek} >
                    Week
            </Button>
            <Button size="small" variant={active.month ? "contained" : "outlined"} onClick={ handleOnMonth}>
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
                    
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    headerToolbar={false}
                    initialView= {valueCalendar.day ? "timeGridDay" : valueCalendar.week ? "dayGridWeek" : "dayGridMonth"}
                    editable
                    selectable
                    selectMirror
                    dayMaxEvents
                    weekends                       
                />
                
            </motion.div>              
        </div>
    </>
  )
}

export default Calendar