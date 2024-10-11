import PropTypes from "prop-types"
import Button from "../Button"
import { Settings } from "lucide-react"

const Card = ({icon, heading, paragraph}) => {
  return (
    <div className="flex flex-1 flex-col gap-10 rounded-xl bg-white p-10 shadow-md shadow-black/20">
        <div className="flex flex-col gap-6">
            {<Settings size={60}/>?? icon}
            
            <h1 className="text-heading font-Ronoto-Slab font-bold text-2xl">{heading}</h1>
        </div>

        <p className="text-paragraph/70 font-Poppins">{paragraph}</p>

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