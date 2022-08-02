import React from 'react'
import { useStateContext } from "../contexts/ContextProvider";

const PageHeader = ({ children }) => {

    const {theme} = useStateContext();
  return (
    <div className="
            ml-7
            mr-7
            mt-4
            rounded-b-lg
            
            h-40 min-h-full
            flex
            flex-row
            justify-center"
            style={{ backgroundColor: theme.header}}>
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default PageHeader