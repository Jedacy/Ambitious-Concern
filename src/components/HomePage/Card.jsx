import PropTypes from "prop-types"
import Button from "../Button"
import { Settings } from "lucide-react"

const Card = ({icon, heading, paragraph}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-10 rounded-xl bg-white p-5 md:p-10 shadow-md shadow-black/20 md:last:col-span-2 lg:last:col-span-1">
        <div className="flex flex-row md:flex-col items-center gap-2 md:gap-6">
            {<Settings className="w-9 h-9 md:w-14 md:h-14"/>?? icon}
            
            <h1 className="text-heading font-Ronoto-Slab font-bold text-xl md:text-2xl">{heading}</h1>
        </div>

        <p className="text-paragraph/70 font-Poppins text-sm md:text-base">{paragraph}</p>

        <Button name="Message Us" link="https://google.com" icon="/homepage_images/message.svg"/>
      
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string
}

export default Card