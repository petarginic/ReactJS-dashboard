import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useStateContext } from "../contexts/ContextProvider";

const CustomCard = (props) => {
    const styles = {
    media: {
      height: 350,    
    } 
    };

    const {theme} = useStateContext();

        return (
            <Card sx={{ maxWidth: 345  }}>
                <CardMedia
                    component="img"
                    height="140"
                    min-height="140"
                    image={props.image} 
                    alt={props.alt}
                    style={styles.media}
                />
                <CardContent className='min-h-[80%]' style={{ backgroundColor: theme.header, color: theme.title}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ color: theme.text}}>
                            {props.description}
                        </Typography>
                </CardContent>
                
                <CardActions style={{ backgroundColor: theme.header}}>
                    {props.isAddedToFavorites ?         
                        <Button size="small" onClick={props.deleteCourse} >
                                Delete
                        </Button>        
                        :    
                        <Button size="small" onClick={props.toFavorite}> 
                                <div className='flex flex-row'>
                                    <p>To favorites</p>
                                    {props.favoriteCourse ? <FavoriteIcon className='ml-2' sx={{ color: red[500] }}/> : <FavoriteBorderIcon className='ml-2' /> }              
                                </div>        
                        </Button>}
                        
                        <Button size="small" onClick={props.learnMore}>
                            Learn More
                        </Button>
                </CardActions>        
            </Card>
        );
        }

        export default CustomCard;
