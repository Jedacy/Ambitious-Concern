import PropTypes from "prop-types"

const Card = ({icon, heading, paragraph, bgColor, textColor, border}) => {
  return (
    <div className={`px-5 pt-2 md:pt-4 border-${border} rounded-lg border-primary flex flex-col gap-3 flex-1 bg-${bgColor}`}>
      <div className="flex flex-row md:flex-col gap-3 items-center">
        <img src="/about_page_images/reliability_icon.png" alt="" className="w-14 h-14 md:w-20 md:h-20"/>
        <h2 className={`text-blue-950 font-Ronoto-Slab text-xl font-extrabold text-${textColor}`}>Integrity</h2>
      </div>
        
        <p className={`pb-4 md:pb-9 font-Poppins text-base text-${textColor} text-sm md:text-base`}>We uphold honesty and transparency in all our interactions, fostering trust with clients and partners.</p>
    </div>
  )
}

Card.PropTypes={
    icon:PropTypes.string.isRequired,
    heading:PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Card