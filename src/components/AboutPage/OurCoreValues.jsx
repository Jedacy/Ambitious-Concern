import React from 'react'
import Card from './Card'

const OurCoreValues = () => {
  return (
    <div className='container mx-auto py-16 md:py-20'>
      <h1 className='font-extrabold text-2xl md:text-4xl text-heading font-Ronoto-Slab'>Our Core Values</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 md:pt-12'>
        <Card border={2}/>
        <Card bgColor={"primary"} textColor={"white"}/>

        <div className='row-span-2 rounded-lg overflow-hidden flex flex-col justify-between gap-5 border-2 border-primary'>
          <img src="/about_page_images/pexels1.jpg" alt="" className='h-40 md:h-[262px] rounded-lg'/>
          <Card/>
        </div>

        <Card bgColor={"primary"} textColor={"white"}/>
        <Card border={2}/>
      </div>

    </div>
  )
}

export default OurCoreValues