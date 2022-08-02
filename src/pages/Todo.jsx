import React , {useState, useEffect} from 'react'
import Header from '../components/Header'
import PageContent from '../components/PageContent'

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from "framer-motion";

import { tasks } from '../data/dummy';

const Todo = () => {

    const [task, setTask] = useState("")
    const [arrayTasks, setArrayTasks] = useState([])
    const [counter, setCounter] = useState(tasks.length + 1)

    useEffect(() => {
        setArrayTasks(tasks)
    },[])

    const newId = () => {
        setCounter(counter+1)
        return counter;
    }

    const handleOnSubmit = (task) => {
        const newTask = {
            id: newId(),
            title: task,
            done: false
        }
        setArrayTasks([...arrayTasks, newTask])
    }

    const handleOnDelete = (id) => {
        const updatedArray = [...arrayTasks].filter((task) => task.id !== id)
        setArrayTasks(updatedArray)
    }

    const handleOnDone = (id) => {
        const updatedArray = [...arrayTasks].map((task) => {
            if(task.id === id){
                task.done = !task.done
            }
            return task;
        })
        setArrayTasks(updatedArray)
    }

  return (
    <div>
          <Header title="ToDo List" description={`You can add here new events. ${arrayTasks.length} tasks are waiting.`}/> 
            <PageContent>

                <div className='flex justify-center mt-10'>              
                    <Box 
                        sx={{ 
                        display: 'flex', 
                        flexDirection: "column",
                        width: '100% ',                    
                        minHeight: 600,
                        paddingBottom: 20                                     
                        }}
                        className="bg-sky-500/20"
                    >                       
                        <div className='flex flex-row justify-center items-center'>
                            <form 
                                className="w-full max-w-sm mt-10"
                                onSubmit={(e) => { 
                                    handleOnSubmit(task)
                                    e.preventDefault()}}
                            >
                                    <div className="flex items-center border-b border-teal-500 py-2">
                                        <input 
                                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                            type="text"
                                            
                                            placeholder="Meetup at Friday.."
                                            onChange={(e) => setTask(e.target.value)}
                                        />
                                        <button 
                                            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                            type="submit">                                  
                                                Add Task
                                        </button>   
                                    </div>
                            </form>
                        </div>

                        <div className='flex flex-col px-10 mt-10  mx-20 '>
                            {arrayTasks.map((item) => {
                                return (
                                    <div  key={item.id} className='flex flex-row justify-between py-2 border-b border-teal-500 '>
                                        <div className>
                                            <Typography
                                                component={motion.span}
                                                initial={{ y: -20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                                                className={item.done ? 'text-10 font-medium ml-2 text-green-500 line-through' : 'text-10 font-medium ml-2'}           
                                            >
                                            {item.id}.{item.title}
                                            </Typography > 
                                        </div>

                                        <div className='flex gap-3'>
                                            <Button size="small" onClick={() => {handleOnDone(item.id)}}>
                                                { item.done ? (
                                                    <div className='flex gap-2'>
                                                        <DoneIcon /> 
                                                            Done 
                                                    </div>
                                                )
                                                : (
                                                    <div className='flex gap-2'>                                                  
                                                        <CircularProgress size="1rem" /> 
                                                            Waiting 
                                                    </div>
                                                )}
                                            </Button>
                                            <Button size="small" onClick={() => {handleOnDelete(item.id)}}>
                                                <DeleteIcon /> 
                                                    Delete
                                            </Button>                   
                                        </div>                      
                                    </div>
                                )
                            })}
                
                        </div> 
                    </Box >
                </div>
            </PageContent>
    </div>
  )
}

export default Todo