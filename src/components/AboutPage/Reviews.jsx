import React from 'react'

const Reviews = () => {
  return (
    <div className='container mx-auto py-10 md:py-20'>
      <h1 className='font-Ronoto-Slab text-2xl md:text-4xl font-extrabold text-heading'>Reviews and Numbers</h1>
      <p className='font-Poppins text-paragraph/80 pt-2 text-sm md:text-base'>By the Numbers: Proven Impact and Success!</p>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-28 lg:gap-40 mt-10 md:mt-14'>
        <div className='border-2 border-primary rounded-3xl py-4 md:py-8 flex flex-col justify-center items-center gap-4 md:gap-7 w-3/4 mx-auto md:w-full'>
          <div className='flex flex-col gap-1 md:gap-3 items-center justify-center'>
            <img src="/about_page_images/File.png" alt="" />
            <h3 className='font-bold text-base md:text-xl uppercase'>Projects</h3>
          </div>
          <p className='font-extrabold text-4xl md:text-5xl font-Poppins'>90</p>
        </div>
        <div className='border-2 border-primary rounded-3xl py-4 md:py-8 flex flex-col justify-center items-center gap-4 md:gap-7 w-3/4 mx-auto md:w-full'>
          <div className='flex flex-col gap-1 md:gap-3 items-center justify-center'>
            <img src="/about_page_images/File.png" alt="" />
            <h3 className='font-bold text-base md:text-xl uppercase'>Projects</h3>
          </div>
          <p className='font-extrabold text-4xl md:text-5xl font-Poppins'>90</p>
        </div>

        <div className='border-2 border-primary rounded-3xl py-4 md:py-8 flex flex-col justify-center items-center gap-4 md:gap-7 w-3/4 mx-auto md:w-full'>
          <div className='flex flex-col gap-1 md:gap-3 items-center justify-center'>
            <img src="/about_page_images/File.png" alt="" />
            <h3 className='font-bold text-base md:text-xl uppercase'>Projects</h3>
          </div>
          <p className='font-extrabold text-4xl md:text-5xl font-Poppins'>90</p>
        </div>
        
        <div className='border-2 border-primary rounded-3xl py-4 md:py-8 flex flex-col justify-center items-center gap-4 md:gap-7 w-3/4 mx-auto md:w-full'>
          <div className='flex flex-col gap-1 md:gap-3 items-center justify-center'>
            <img src="/about_page_images/File.png" alt="" />
            <h3 className='font-bold text-base md:text-xl uppercase'>Projects</h3>
          </div>
          <p className='font-extrabold text-4xl md:text-5xl font-Poppins'>90</p>
        </div>
    </div>

    </div>
  )
}

export default Reviews