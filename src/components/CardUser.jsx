import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const CardUser = (props) => {
    const styles = {
    media: {
      height: 350,
      maxWidth:600
    }
};
  return (
    <Card sx={{ maxWidth: 400  }}>
        <CardMedia
            component="img"
            height="140"
            min-height="140"
            image={props.image}
            alt={props.alt}
            style={styles.media}
            min-width="140"
        />
        <CardContent className='min-h-[80%]'>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.description}
            </Typography>
        </CardContent>
         
         <Typography className='min-h-[80%] '>
                <div className='border-b px-6 flex flex-row  justify-between border-gray-400 pt-5'>
                    <Typography variant="body2" color="text.secondary">
                        Status: 
                    </Typography>
                    <Button size="small">{props.status}</Button>
                </div>
                
                <div className='border-b px-6 flex flex-row  justify-between border-gray-400 pt-5' >
                    <Typography variant="body2" color="text.secondary">
                        Member since: 
                    </Typography>
                    
                    <Button size="small">{props.member}</Button>
                </div>
        </Typography>        
    </Card>
  );
}

export default CardUser;
