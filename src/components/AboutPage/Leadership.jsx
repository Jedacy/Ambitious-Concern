import { leadership } from "../../Constants"
import LeadershipCard from "./LeadershipCard"


const Leadership = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="container mx-auto py-20">
        <div>
          <h1 className="font-Ronoto-Slab text-2xl md:text-4xl font-extrabold text-heading">Meet the Team</h1>
          <p className="font-Poppins text-paragraph/80 text-sm md:text-base">The men keeping the business alive</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-12 pt-10">
          {leadership.map((leader, index) => (
            <LeadershipCard key={index} img={leader.imageUrl} name={leader.name} position={leader.role}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Leadership