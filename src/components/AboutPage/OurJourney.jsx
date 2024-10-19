import React from 'react'

const OurJourney = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-5 py-10 md:py-20'>
        <div className='w-full md:w-1/2'>
            <h1 className='font-extrabold font-Ronoto-Slab text-2xl md:text-4xl text-heading'>Our Journey</h1>
            <p className='font-Poppins text-paragraph/90 pt-3 md:pt-7 text-sm md:text-base'>Ambitious Concern started as a dream shared by a group of passionate individuals who believed in pushing boundaries and embracing creativity. From our humble beginnings, we've evolved into a dynamic company that delivers cutting-edge solutions across a range of services, including tech innovation, visual production, web development, and design.Today, Ambitious Concern is not just a company; it’s a platform for creativity, innovation, and impact. Our journey has been one of resilience, growth, and continuous transformation, and we're just getting started. Together, we are shaping a future where ambition knows no bounds.</p>
        </div>

        <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img src="/about_page_images/Frame.png" alt="" className='h-60 md:h-auto' />
        </div>
    </div>
  )
}

export default OurJourney