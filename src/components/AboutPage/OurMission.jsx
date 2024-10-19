import { ArrowRight } from "lucide-react"


const OurMission = () => {
  return (
    <div className="container mx-auto py-16 md:py-20 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-5">
            <h1 className="text-heading font-Ronoto-Slab text-2xl md:text-4xl font-extrabold">Our Mission</h1>
            <p className="text-paragraph/90 font-Poppins max-w-[50ch] text-sm md:text-base">At Ambitious Concern, our mission is to empower creativity and innovation by delivering exceptional solutions across technology, design, and media. We aim to transform ideas into impactful realities, fostering growth for our clients and contributing to positive change in our communities.</p>

            <div className="flex gap-5 items-center pt-5">
                <ul className="flex flex-col gap-3">
                    <li className="font-Poppins flex items-center gap-2 text-xs md:text-base"><ArrowRight className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full text-white p-1"/> Collaboration</li>
                    <li className="font-Poppins flex items-center gap-2 text-xs md:text-base"><ArrowRight className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full text-white p-1"/> Dedication</li>
                    <li className="font-Poppins flex items-center gap-2 text-xs md:text-base"><ArrowRight className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full text-white p-1"/>Deliver Excellence</li>
                </ul>

                <ul className="flex flex-col gap-3">
                    <li className="font-Poppins flex items-center gap-2 text-xs md:text-base"><ArrowRight className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full text-white p-1"/> Solidarity & Strength</li>
                    <li className="font-Poppins flex items-center gap-2 text-xs md:text-base"><ArrowRight className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full text-white p-1"/>Foster Creativity</li>
                    <li className="font-Poppins flex items-center gap-2 text-xs md:text-base"><ArrowRight className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full text-white p-1"/> Sustainable Solutions</li>
                </ul>
                
            </div>
        </div>

        <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-3">
                <img src="/about_page_images/pexels1.jpg" alt="" className="rounded-lg h-28 md:h-40 w-full object-cover shadow-lg"/>
                <img src="/about_page_images/pexels1.jpg" alt="" className="rounded-lg h-28 md:h-40 w-full object-cover shadow-lg"/>
            </div>
            <div className=" pt-3">
                <img src="/about_page_images/pexels2.jpg" alt="" className="h-32 md:h-44 w-full object-cover rounded-lg shadow-md"/>
            </div>
        </div>
      
    </div>
  )
}

export default OurMission