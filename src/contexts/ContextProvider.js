import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {

    const themes = {
        light: {
            body:"#eeeeee",
            elements: "#ffffff",
            text: "#010a0f",
            title: "#010a0f",
            header: "#d1d5db",  
            
        },
        dark: {
            body: "#010a0f",
            elements:"#001e28",
            text: "#eeeeee",
            title:"#ffffff",
            header: "#4b5563"          
        }
    }
    
    const [theme,setTheme] = useState(themes.light)
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(undefined)
    const [favoriteCourses, setFavoriteCourses] = useState([])

        const addFavoriteCourse = (course) => {
            setFavoriteCourses((prevFavoriteCourses) => { 
                return prevFavoriteCourses.concat(course)
        })
        }

        const removeFavoriteCourse = (courseID) => {
            setFavoriteCourses((prevFavoriteCourses) => { 
                return prevFavoriteCourses.filter(favoriteCourses => favoriteCourses.id !== courseID)
            })
        }
      
        const courseIsFavorite = (courseID) => {
            return favoriteCourses.some(course => course.id === courseID);
        }

        const setLight = () => {
            setTheme(themes.light)
            console.log("svetlo")
        }

        const setDark = () => {
            setTheme(themes.dark)
            console.log("tamno")
        }
     
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                setScreenSize,
                screenSize,
                favoriteCourses,
                setFavoriteCourses,
                addFavoriteCourse,
                removeFavoriteCourse,
                courseIsFavorite,
                theme,
                setTheme,
                setLight,
                setDark                  
            }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)