
const Footer = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto">
        <div className="flex gap-5 justify-between">
            <img src="/New Logo_transparent.png" alt="" className="h-20"/>

            <div className="flex flex-col gap-4"> 
                <div className="flex gap-4">
                    <img src="/Socials/footer/location.png" alt="" />
                    <p>East Legon</p>
                </div>
                <div className="flex gap-4">
                    <img src="/Socials/footer/call.png" alt="" />
                    <p>+233 54 147 9223</p>
                    <p>+233 20 252 4771</p>
                </div>
                <div className="flex gap-4">
                  <p>Social Media</p>
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

        <div className="flex justify-between mt-20">
          <div className="flex gap-16">
            <a href="" className="uppercase font-bold text-black/70">About Us</a>
            <a href="" className="uppercase font-bold text-black/70">Contact Us</a>
            <a href="" className="uppercase font-bold text-black/70">Help</a>
            <a href="" className="uppercase font-bold text-black/70">Privacy Policy</a>
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