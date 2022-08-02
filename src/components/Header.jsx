import React from 'react'

import { motion } from "framer-motion";
import { useStateContext } from "../contexts/ContextProvider";
import Typography from "@mui/material/Typography";


const Header = (props) => {
    const {theme} = useStateContext();
    
        return (
            <div className="ml-7 mr-7 mt-4 rounded-b-lg h-40 min-h-full flex flex-row justify-center md:mx-6" style={{ backgroundColor: theme.header}} >      
                <div className="container" style={{ backgroundColor: theme.header}}>
                        <div className="flex justify-start content-center mt-12  md:mx-6 relative" >

                            <div className="flex flex-col justify-center items-center sm:items-start" >
                                <Typography
                                    component={motion.span}
                                    initial={{ x: -20 }}
                                    animate={{ x: 0, transition: { delay: 0.2 } }}
                                    className="text-24 md:text-32 font-extrabold tracking-tight leading-none"
                                >
                                    <h1 className='text-4xl  tracking-tight' style={{ color: theme.title}}>{props.title}</h1>
                                </Typography>

                                <Typography
                                    component={motion.span}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                                    className="text-14 font-medium ml-2"                 
                                >
                                    <h3 className='text-2xl  mt-2' style={{ color: theme.text}}>{props.description}</h3> 
                                </Typography >          
                            </div>
                        </div>   
                </div>
            </div>
        )
    }

export default Header