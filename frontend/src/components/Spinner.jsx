import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center width-100'>
    <div className='animate-ping w-32 h-32 m-8 rounded-full bg-sky-600'></div>
    </div>
  )
}

export default Spinner