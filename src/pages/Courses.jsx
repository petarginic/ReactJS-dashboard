import React, {useEffect, useState} from 'react'
import CoursesContent from '../components/Courses/CoursesContent';
import CoursesHeader from '../components/Courses/CoursesHeader';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';

import { courses } from '../data/dummy';

const Courses = () => {

    const [arrayCourses, setArrayCourses] = useState([])

    useEffect (() => {
        setArrayCourses(courses)
    },[])
    
    return (    
        <>
            <PageHeader> 
                <CoursesHeader lengthOfCourses={courses.length}/>
            </PageHeader>
            
            <PageContent>    
                <CoursesContent  courses={arrayCourses} setCourses={setArrayCourses} />
            </PageContent>         
        </>
    )
}

export default Courses
