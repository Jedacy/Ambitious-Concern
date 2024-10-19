import React from 'react'
import Card from './Card'
import { corevals } from '../../Constants'

const OurCoreValues = () => {
  return (
    <div className='container mx-auto py-16 md:py-20'>
      <h1 className='font-extrabold text-2xl md:text-4xl text-heading font-Ronoto-Slab'>Our Core Values</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 md:pt-12'>

        {corevals.map((item, index)=>(
          
            <Card key={index} icon={item.icon} heading={item.heading} bgColor={index % 2 != 0?"primary":""} textColor={index % 2 != 0?"white":""} paragraph={item.paragraph} border={2}/>
    
          
        ))}

      </div>

    </div>
  )
}

export default OurCoreValues