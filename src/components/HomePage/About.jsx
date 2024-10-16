import Button from "../Button"
import { ArrowRight } from "lucide-react"
import { about_list } from "../../Constants"

const About = () => {
  return (
    <div className='bg-secondary py-20 mt-24'>
        <div className="container mx-auto">
            <div className='max-w-96'>
                <h3 className="font-Poppins font-bold text-sm md:text-base">About Us</h3>
                <h1 className='font-Ronoto-Slab text-2xl leading-6 md:leading-8 md:text-2xl lg:text-3xl font-extrabold text-heading'>Crafting Tailored Software Solutions for Tomorrow's Challenges.</h1>
            </div>
            
            {/* Holds the image and content */}
            <div className='mt-5 flex flex-col md:flex-row gap-5'>
                <div className='bg-primary w-full md:w-1/2 h-[200px] md:h-[328px] overflow-clip rounded-tl-3xl rounded-br-3xl'>
                    <img src="/about_page_images/pexels2.jpg" alt="" className="h-full w-full object-cover"/>
                </div>
                
                <div className='w-full md:w-1/2 flex flex-col gap-7 justify-center'>
                    <p className='font-Ronoto-Slab font-bold leading-5 text-heading text-base md:text-lg'>We are a dynamic software development company focused on innovation and excellence. Our mission is to transform ideas into impactful digital solutions.</p>

                    <ul>
                        {about_list.map((item, index) => (
                        <li className="flex items-center pt-3 gap-2" key={index}>
                            <ArrowRight color="white"  className="w-6 h-6 rounded-full bg-primary p-1"/>
                            <p className="text-paragraph/80 font-normal md:font-medium text-sm md:text-base">{item.name}</p>
                        </li>
                        ))}
                    </ul>

                    <Button name="Know More About Us" link="/contact" width={"1/2"}/>
                </div>
                
            </div>
        </div>
       
    </div>
  )
}

export default About