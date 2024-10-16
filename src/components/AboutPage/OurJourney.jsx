import React from 'react'

const OurJourney = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-5 py-10 md:py-20'>
        <div className='w-full md:w-1/2'>
            <h1 className='font-extrabold font-Ronoto-Slab text-2xl md:text-4xl text-heading'>Our Journey</h1>
            <p className='font-Poppins text-paragraph/90 pt-3 md:pt-7 text-sm md:text-base'>Our journey began with a small team of passionate innovators dedicated to transforming ideas into impactful software solutions. Since our inception, we have grown significantly, embracing new technologies and expanding our expertise. Over the years, we’ve successfully completed numerous projects across various industries, earning the trust of our clientsToday, we stand as a reliable partner, ready to tackle new challenges and drive digital transformation for our clients.</p>
        </div>

        <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img src="/about_page_images/Frame.png" alt="" className='h-60 md:h-auto' />
        </div>
    </div>
  )
}

export default OurJourney