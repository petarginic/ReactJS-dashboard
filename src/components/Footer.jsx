import React from 'react';
import { useStateContext } from "../contexts/ContextProvider";
 
const Footer = () => {
     
    const {theme} = useStateContext();

    return (
    <>
        <div className="md:mx-6 relative  h-20 flex items-center justify-center mx-7 mt-20" >
            <p className="text-center m-20" style={{ color: theme.text}}>
            © 2022 All rights reserved by Petar Ginic
            </p>
        </div>
    </>
)
    }

export default Footer;