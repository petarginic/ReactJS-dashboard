import { Link,NavLink } from "react-router-dom";
import React from 'react'

import CastForEducationSharpIcon from '@mui/icons-material/CastForEducationSharp';
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineCancel } from "react-icons/md";


import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";


const Sidebar = () => {

  const {activeMenu,setActiveMenu,theme} = useStateContext()

  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-3 rounded-lg text-black text-md m-2"
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-3 rounded-lg text-black text-md m-2 text-grey-700 hover:bg-light-gray"

  const handleActiveMenu = () => {
    setActiveMenu(false)
  }

  return (
    <div className='pl-3 md:overflow-hidden overflow-auto md:hover:overflow-auto h-screen pb-10 bg-slate-100' style={{ backgroundColor: theme.elements}}>
        {activeMenu && (
            <>           
                <div className='flex justify-between items-center'>  
                    <div>
                        <Link to="/" className="items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold tracking-tight " style={{color: theme.text}}>
                            <CastForEducationSharpIcon /> <span> OnlineCourses</span>                    
                        </Link>
                    </div>               
                                          
                    <div  >
                        <Tooltip title="Close" onClose={handleActiveMenu}>
                            <button type="button" className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden" >
                               <MdOutlineCancel/>
                            </button>
                        </Tooltip>
                    </div>                                     
                </div>

                <div className="mt-10">
                    {links.map((item) => (
                        <div key={item.title}>
                            <p className="text-gray-400 m-3 mt-4 uppercase">
                                {item.title}
                            </p>
                            {item.links.map((link) => (
                                <NavLink
                                    to={`/${link.name}`}
                                    key={`/${link.name}`}
                                    className={({isActive}) => isActive ? activeLink : normalLink}                                
                                >
                                        <span style={{color: theme.text}}>
                                            {link.icon}
                                        </span>
                                        
                                        <span className="capitalize" style={{color: theme.text}}>
                                            {link.name}
                                        </span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
            </>
        )}

    </div>
  )
}

export default Sidebar