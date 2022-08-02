import React from 'react'

import { motion } from "framer-motion";
import { useStateContext } from "../../contexts/ContextProvider";

import Typography from "@mui/material/Typography";

const CoursesHeader = (props) => {

  const lengthOfCourses = props.lengthOfCourses;
  const {theme} = useStateContext();

  return (
      <div className="flex justify-start content-center mt-12 ml-4" style={{ backgroundColor: theme.header}}>

            <div className="flex flex-col justify-center items-center sm:items-start" >
                <Typography
                    component={motion.span}
                    initial={{ x: -20 }}
                    animate={{ x: 0, transition: { delay: 0.2 } }}
                    className="text-24 md:text-32 font-extrabold tracking-tight leading-none"
                >
                    <h1 className='text-4xl text-black tracking-tight' style={{ color: theme.title}}>All Courses</h1>
                </Typography>

                <Typography
                    component={motion.span}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                    className="text-14 font-medium ml-2"                 
                >
                   <h3 className='text-2xl text-gray-400 mt-2 ' style={{ color: theme.text}}>{`${lengthOfCourses} available courses` }</h3> 
                </Typography >          
            </div>
        </div>          
  )
}

export default CoursesHeader