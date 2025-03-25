import React from 'react'
import {reviewData} from './Testimonialdata.js';
import Feedback from './Feedback.jsx';


const Testimonial = () => {
  console.log(reviewData );
  return (
    <div className='mt-12 mb-4'>
        <h1 className='text-center text-3xl mb-10'>Testimonials</h1>

        <div className='flex items-center justify-around px-5 py-3'>

          {
            reviewData.map((feedbackData,index)=>(
              <Feedback feedbackData={feedbackData} key={index}/>
            ))
          }

        </div>

        
    </div>
  )
}

export default Testimonial