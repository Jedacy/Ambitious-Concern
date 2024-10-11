import { ArrowLeft, ArrowRight } from 'lucide-react'

const Testimonials = () => {
  return (
    <div className='bg-testimonial bg-no-repeat bg-center bg-cover py-20'>
        <div className='container mx-auto'>

            <div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-2'>
                {/* Holds the testimonial image */}
                <div className='h-80 md:h-96 w-full md:w-1/2 flex justify-center'>
                    <div className='overflow-clip h-80 md:h-[400px] bg-primary rounded-tl-full rounded-bl-full rounded-br-full w-96'>
                        <img src="/testimonial/testimonial1.png" alt="" />
                    </div>
                </div>

                {/* Holds the testimonial content */}
                <div className='w-full md:w-1/2 flex flex-col gap-8'>
                    <div>
                        <h4 className='font-Poppins font-bold text-sm md:text-base'>Testimonials</h4>
                        <h2 className='font-Ronoto-Slab font-extrabold text-heading text-xl md:text-2xl leading-6 md:leading-8'>Real Experiences, Real Results: Hear from Our Satisfied Clients.</h2>
                    </div>
                    
                    <div className='flex flex-col gap-4'>
                        <p className='font-Poppins md:font-base leading-6 text-sm'>"Working with this team transformed our project. Their expertise, clear communication, and commitment to quality exceeded our expectations. We couldn’t be happier with the results!"</p>
                        
                        <div>
                            <p className='font-bold font-Poppins sm:text-base md:text-xl'>Kwabena Asiedu.</p>
                            <p className='font-Poppins text-black/70 text-xs md:text-sm'>Ambitious Concern Ltd, Ghana (CEO)</p>
                        </div>
                    </div>

                    <div className='flex gap-5 justify-between md:justify-start'>
                        <ArrowLeft className='w-16 h-8 bg-primary/20 p-1 rounded-lg text-primary/80'/>
                        <ArrowRight className='w-16 h-8 bg-primary/80 rounded-lg text-white p-1' />
                    </div>
                    
                </div>                
            </div>
           
        </div>
    </div>
  )
}

export default Testimonials