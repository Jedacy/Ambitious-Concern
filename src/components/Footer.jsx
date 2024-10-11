
const Footer = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto">
        <div className="flex gap-5 flex-col md:flex-row md:justify-between">
            <img src="/New Logo_transparent.png" alt="" className="w-44 md:h-20"/>

            <div className="flex flex-col gap-4"> 
                <div className="flex gap-4 items-center">
                    <img src="/Socials/footer/location.png" alt="" />
                    <p className="text-xs md:text-base font-Poppins">East Legon</p>
                </div>
                <div className="flex gap-4 items-center">
                    <img src="/Socials/footer/call.png" alt="" />
                    <p className="text-xs md:text-base font-Poppins">+233 54 147 9223</p>
                    <p className="text-xs md:text-base font-Poppins">+233 20 252 4771</p>
                </div>
                <div className="flex gap-4 items-center ">
                  
                  <div className="flex gap-2">
                    <a href="#"><img src='/Socials/footer/facebook.png' alt="" /></a>
                    <a href="#"><img src="/Socials/footer/twitter.png" alt="" /></a>
                    <a href="#"><img src="/Socials/footer/instagram.png" alt="" /></a>
                    <a href="#"><img src="/Socials/footer/linkedin.png" alt="" /></a>
                    <a href="#"><img src="/Socials/footer/youtube.png" alt="" /></a>
                  </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-5 mt-20">
          <div className="flex flex-wrap gap-y-1 gap-x-5 justify-center md:justify-start md:gap-10 lg:gap-16">
            <a href="" className="uppercase font-bold text-black/70 text-sm md:text-base">About Us</a>
            <a href="" className="uppercase font-bold text-black/70 text-sm md:text-base">Contact Us</a>
            <a href="" className="uppercase font-bold text-black/70 text-sm md:text-base">Help</a>
            <a href="" className="uppercase font-bold text-black/70 text-sm md:text-base">Privacy Policy</a>
          </div>

          <div>
            <p className="text-black/70 text-sm">Copyright {new Date().getFullYear()} Ambitious Concern Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer