import React from 'react'
import Header from '../components/Header'
import PageContent from '../components/PageContent'
import { useStateContext } from '../contexts/ContextProvider'
import CoursesContent from '../components/Courses/CoursesContent';

const FavoriteCourses = () => {
    
  const { favoriteCourses, setFavoriteCourses} = useStateContext();
    return (
        <>
        <Header title="Favorite Courses" description={`${favoriteCourses.length} courses`} /> 
            <PageContent>
                <CoursesContent courses={favoriteCourses} setCourses={setFavoriteCourses} />
            </PageContent>
        </>
    )
}

export default FavoriteCourses