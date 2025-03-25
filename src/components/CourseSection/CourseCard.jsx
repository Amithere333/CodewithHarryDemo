import React from 'react'


const CourseCard = ({course}) => {
  return (
    <div className=' w-[30%] m-3 px-3 py-5  break-words  rounded-md shadow-lg'>
       <img src={course.image} alt="images" className='w-[100%] rounded-t-xl mb-8'/>

       <p className=' text-sm font-medium mb-5 '>{course.type}</p>

       <h3 className='font-semibold mb-5'>{course.course_name}</h3>

       <p className='text-gray-700 h-[150px] mb-1 '>{course.description}</p>

       <p><a href={course.link} className='bg-purple-700 px-2 py-2 text-white rounded-full hover:bg-purple-600'>Start Watching</a></p>
    </div>
  )
}

export default CourseCard