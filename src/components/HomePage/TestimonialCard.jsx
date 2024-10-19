import React from 'react'

const TestimonialCard = ({margin}) => {
  return (
    <div className={`bg-slate-50 p-5 shadow-md border-2 border-primary/20 rounded-lg mr-${margin}`}>
        <div className="flex gap-4 items-center" >
            <img src="/testimonial/testimonial1.png" alt="" className='h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary'/>
            <div>
                <p className='font-Poppins font-bold text-base md:text-lg'>Leader Name</p>
                <p className='font-Poppins text-[10px] md:text-xs text-paragraph/70'>CEO, Alpha Links Ltd</p>
            </div>
        </div>

        <div className='pt-5'>
            <p className='font-Poppins text-paragraph/95 text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate esse fuga iure praesentium commodi repellendus? Corporis necessitatibus ipsum hic, ducimus nihil eaque, quo obcaecati excepturi</p>
        </div>
    </div>
  )
}

export default TestimonialCard