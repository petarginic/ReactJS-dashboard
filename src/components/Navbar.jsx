import { Tooltip } from '@mui/material'
import React, {useEffect, useState} from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useStateContext } from '../contexts/ContextProvider';



const Navbar = () => {

   const { activeMenu, setActiveMenu,screenSize,setScreenSize,setDark,setLight} = useStateContext();

   const [checked, setChecked] = useState(true);

   const handleOnClose = () => {
     setActiveMenu(!activeMenu)
   }

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
     }, []);


    useEffect(() => {
            if (screenSize <= 900) {
            setActiveMenu(false);
            } else {
            setActiveMenu(true);
            }
    }, [screenSize]);

     const handleChange = (event) => {
        setChecked(event.target.checked);
        { checked ?  setDark() : setLight() }
    };


  return (
    <>
    <div className='flex justify-between p-4 md:mx-6 relative shadow-xl ' >
        <div>
            <Tooltip title="Menu">
                <button 
                    type="button"
                    onClick={handleOnClose}
                    className="text-2xl rounded-full p-3 hover:bg-light-gray">
                        <span className='absolute inline-flex rouned-full h-2 w-2 right-2 top-2 '/>              
                        <MenuIcon />
                </button>
            </Tooltip>
        </div>
               
        <div>
            <Tooltip title="Change Theme">
                <button 
                    type="button"
                    className="text-2xl rounded-full p-3 hover:bg-light-gray">              
                        <span className='absolute inline-flex rouned-full h-2 w-2 right-2 top-2'/>              
                        <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                </button>
            </Tooltip>

            <Tooltip title="Log Out">
                <button 
                    type="button"
                    className="text-2xl rounded-full p-3 hover:bg-light-gray">              
                        <span className='absolute inline-flex rouned-full h-2 w-2 right-2 top-2'/>              
                           <ExitToAppIcon /> 
                </button>
            </Tooltip>
        </div>
       
    </div>
    </>
  )
}

export default Navbar