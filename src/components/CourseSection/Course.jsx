import React from 'react'
import CourseCard from './CourseCard'
import {courseData} from '../courseData.js'


const Course = () => {
    console.log(courseData);

    
  return (
    <div>
        <h2 className='text-center text-3xl mt-3 font-[400]'>Recommended Courses</h2>

        <div className='flex justify-center gap-4  w-[100%] m-auto px-[50px]'>

            {
                courseData.map((course)=>(
                    <CourseCard course={course}/>
                ))
            }
            

        </div>
    </div>
  )
}

export default Course