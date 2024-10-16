import React from 'react'

const OurApproach = () => {
  return (
    <div className='container mx-auto py-8 md:py-20'>
      <div className='flex flex-col md:flex-row gap-5 justify-between'>

        <div>
          <h1 className='text-3xl font-Ronoto-Slab text-heading font-extrabold'>Our Approach</h1>
          <p className='max-w-[50ch] text-sm md:text-base font-Poppins text-paragraph/70 pt-2'>Designing Success: User-Centric Solutions Through Collaborative Innovation.</p>  
        </div>

        <div className='flex gap-4 items-center'>
          <p className='bg-tag-color py-2 md:px-4 px-2 rounded-lg text-tag-text font-semibold text-[10px] text-center tracking-wide leading-3 md:text-sm font-Poppins'>UI/UX Designs</p>
          <p className='bg-tag-color py-2 md:px-4 px-2 rounded-lg text-tag-text font-semibold text-[10px] text-center tracking-wide leading-3 md:text-sm font-Poppins'>UI/UX Designs</p>
          <p className='bg-tag-color py-2 md:px-4 px-2 rounded-lg text-tag-text font-semibold text-[10px] text-center tracking-wide leading-3 md:text-sm font-Poppins'>UI/UX Designs</p>
        </div>
      </div>

      <div className='pt-6'>
        <img src="/about_page_images/Our Approach.png" alt="" />
      </div>
      
    </div>
  )
}

export default OurApproach