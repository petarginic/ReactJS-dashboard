import React  from 'react'
import CustomCard from '../CustomCard'
import Typography from "@mui/material/Typography";

import { useStateContext } from '../../contexts/ContextProvider';

const CoursesContent = (props) => {

    const courses = props.courses;
    const setCourses = props.setCourses;
    const {addFavoriteCourse, removeFavoriteCourse} = useStateContext();

    const handleOnFavorite = (course) => {

        setCourses(courses.map((kurs) => kurs === course ? {...kurs, favorite: true} : kurs))

        addFavoriteCourse({
            id: course.id,
            title: course.title,
            description: course.description,
            image:course.image,
            favoriteCourse: true,
            isAdded: true
        }) 
    }

    if (courses.length === 0) {
        return (
        <div className="flex flex-1 items-center justify-center h-full mt-20">
            <Typography color="text.secondary" variant="h5">
                There are no favorite courses!
            </Typography>
        </div>
        );
    }

     if (courses === undefined) {
        return <div>loading...</div>
    }

    return (  
   
        <div className='ml-15 mt-15' >
            <div className='grid grid-flow-row auto-rows-max md:auto-rows-min xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {courses.map((item) => (
                    <div key={item.id} className='ml-2 mt-6'>
                        <CustomCard 
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            alt={item.title}
                            favoriteCourse={item.favorite}
                            toFavorite={() => handleOnFavorite(item)}
                            isAddedToFavorites={item.isAdded}
                            deleteCourse={() => removeFavoriteCourse(item.id)}
                        />
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default CoursesContent