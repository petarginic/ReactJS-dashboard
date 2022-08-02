import React from 'react'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';

import { useStateContext } from "../../contexts/ContextProvider";

const UsersContent = (props) => {

    const {theme} = useStateContext()
    const data = props.data;
    return (

        <div >
            {data.map((item) => (

            <div  key={item.name} className='ml-15 mt-15'>
                <ListItem
                    className="px-32 py-16"
                    style={{ backgroundColor: theme.element}}             
                >
                    <ListItemAvatar >
                        <Avatar alt={item.message} src={item.image}  />
                    </ListItemAvatar>

                    <ListItemText
                        classes={{ root: 'm-0', primary: 'font-medium leading-5 truncate' }}
                        primary={`${item.name} `}
                        style={{ color: theme.text}}
                        secondary={
                            <div>
                                <Typography
                                    className="inline"
                                    component="span"
                                    variant="body2"
                                    color="text.secondary"
                                    style={{ color: theme.text}}
                                >
                                        {`${item.mail} `}
                                </Typography>
                            </div>
                        }
                    />                   
                        <Rating name="size-medium" defaultValue={item.rating}/>
                </ListItem>

                <Divider  style={{ backgroundColor: theme.text}}/> 
            </div>

            ))}
        </div>
    )
    }

export default UsersContent