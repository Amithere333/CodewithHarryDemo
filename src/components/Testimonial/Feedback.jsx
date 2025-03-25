import React from 'react'

const Feedback = ({feedbackData}) => {
    
  return (
    <div className='w-[43%] rounded-xl bg-gray-100 px-5 py-10 min-h-[300px] mb-8'>
        <p className='text-gray-700  h-[150px]'>{feedbackData.feedback}</p>

        <h3 className='font-semibold'>{feedbackData.name}</h3>
        <p className='text-gray-600'>{feedbackData.course}</p>
    </div>
  )
}

export default Feedback