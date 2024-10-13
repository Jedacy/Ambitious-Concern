import { Code,ArrowRight } from "lucide-react"
const Card = () => {
  return (
    <div className="flex-1 relative">
        
        <div className="border-black/10 border-2 rounded-3xl shadow-sm pt-[80px] pb-[48px] px-5 flex flex-col gap-6 justify-center items-center">
            <div className="h-20 w-20 rounded-full flex justify-center items-center bg-primary/30 backdrop-blur-xl absolute -top-10">
                <Code />
            </div>
            <h3 className="font-Ronoto-Slab text-heading font-bold text-2xl text-center">Web Development</h3>
            <p className="font-Poppins text-sm md:text-base text-paragraph/70 text-center">Our web development services focus on creating dynamic, user-friendly websites that drive engagement and conversions.</p>
            <a href="#" className="flex gap-3 items-center bg-btn-primary text-center py-3 px-10 rounded-md text-white font-Poppins text-sm md:text-base hover:bg-btn-hover transition-all">View More<ArrowRight /></a>
        </div>

    </div>
  )
}

export default Card