import { Facebook, Linkedin, Phone, Twitter } from "lucide-react"
import PropTypes from "prop-types"

const LeadershipCard = ({img, name, position}) => {
  return (
    <div>
        <div className="rounded-lg overflow-hidden h-80">
            <img src={img} alt="" className="h-full w-full object-cover"/>
        </div>

        <div className="px-4 py-3 rounded-lg bg-white shadow-lg mt-3 border-2 border-primary/20">
            <h2 className="font-Poppins text-xl font-medium">{name}</h2>
            <p className="font-Poppins text-xs">{position}</p>

            <ul className="flex gap-6 items-center pt-2">
                <li><Facebook color="blue" size={20}/></li>
                <li><Twitter color="blue" size={20}/></li>
                <li><Phone color="blue" size={20}/></li>
                <li><Linkedin color="blue" size={20}/></li>
            </ul>
        </div>
    </div>
  )
}

LeadershipCard.PropTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string
}

export default LeadershipCard