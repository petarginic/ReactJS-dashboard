import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Profile from "./pages/Profile";
import Courses from './pages/Courses';
import Home from './pages/Home';
import FavoriteCourses from './pages/FavoriteCourses';
import Users from './pages/Users';
import Footer from './components/Footer';

import { useStateContext } from './contexts/ContextProvider';
import Calendar from './pages/Calendar';
import Todo from "./pages/Todo";


function App() {

    const {activeMenu, theme, themes} = useStateContext();

  return (
    
        <BrowserRouter>
            <div className='flex relative min-h-full h-100' style={{ backgroundColor: theme.body}} >

                {activeMenu ? (
                    <div className='w-72 fixed sidebar'>
                        <Sidebar  style={{ backgroundColor: theme.elements, color: theme.text}} /> 
                    </div> 
                   ) : ( 
                   <div className='w-0' >
                         <Sidebar style={{ backgroundColor: theme.elements, color: theme.text}} />
                    </div>           
                )}

                <div className={ activeMenu
                        ?  "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full relative "
                        :  "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2"}>

                        <div className='fixed md:static navbar w-full'  style={{ backgroundColor: theme.elements, color: theme.text}}>
                            <Navbar/>
                        </div>                           
 
                            <div>
                                <Routes> 
                                    <Route path="/" element={<Home />}/>                             
                                    <Route path="/home" element={<Home />}/>
                                    <Route path="/profile" element={<Profile />}/>
                                    <Route path="/courses" element={<Courses />}/>
                                    <Route path="/favorite-courses" element={<FavoriteCourses />}/>
                                    <Route path="/professors" element={<Users />}/>  
                                    <Route path="/calendar" element={<Calendar />}/>  
                                    <Route path="/to-do" element={<Todo />}/>                           
                                </Routes>
                            </div>

                            <div className='fixed bottom-0 md:static footer w-full' style={{ backgroundColor: theme.elements}}>
                                <Footer /> 
                            </div>
                                       
                </div> 

            </div>
        </BrowserRouter>
 
  );
}

export default App;
