import Card from './Card'
import { services_list } from '../../Constants'

const Services = () => {
  return (
    <div className='bg-[#F1F1F1]'>
      <div className='container mx-auto py-20'>
        <div>
        <h4 className='font-Poppins font-bold'>About Us</h4>
        <h1 className='font-Ronoto-Slab font-extrabold text-heading text-3xl'>What We Do</h1>
        </div>

        <div className='flex gap-5 mt-14'>
          {services_list.map((item, index) => (
            <Card key={index} heading={item.name} paragraph={item.description}/>
          ))}
        </div>
        
      </div>
    </div>

  )
}

export default Services