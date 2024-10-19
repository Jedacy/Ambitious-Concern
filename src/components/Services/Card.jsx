import { Code,ArrowRight } from "lucide-react"
const Card = ({heading, paragraph, href}) => {
  return (
    <div className="flex-1 relative">
        
        <div className="border-black/10 border-2 rounded-3xl shadow-sm pt-10 pb-6 md:pt-20 md:pb-12 px-8 flex flex-col gap-3 md:gap-6 justify-center items-center bg-white">
            <div className="h-10 w-10 md:h-20 md:w-20 rounded-full flex justify-center items-center bg-primary/30 backdrop-blur-xl absolute -top-5 md:-top-10">
                <Code />
            </div>
            <h3 className="font-Ronoto-Slab text-heading font-bold text-lg md:text-2xl text-center">{heading}</h3>
            <p className="font-Poppins text-xs md:text-base leading-5 text-paragraph/70">{paragraph}</p>
            <a href={href} className="flex gap-3 items-center bg-btn-primary text-center py-2 px-6 md:py-3 md:px-10 rounded-md text-white font-Poppins text-xs md:text-base hover:bg-btn-hover transition-all">View More<ArrowRight className="py-[2px] md:py-0"/></a>
        </div>

    </div>
  )
}

export default Card