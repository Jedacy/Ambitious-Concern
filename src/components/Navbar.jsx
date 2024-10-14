import { X, Menu } from "lucide-react"
import { navItems } from "../Constants"
import { useState } from "react"

const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    const mobileNav = () => setMobile(!mobile)

  return (
    <div className="font-Poppins sticky -top-10 z-10">
        {/* Banner to host the social icons */}
        <div className="bg-primary py-2 flex gap-4 justify-center md:justify-between">
            {/* Social Icons */}
            <div></div>
            <div className="flex gap-4 items-center justify-center pr-0 md:pr-24 text-white">
                <a href="#"><img src='/Socials/header/facebook1.png' alt="" /></a>
                <a href="#"><img src="/Socials/header/twitter.png" alt="" /></a>
                <a href="#"><img src="/Socials/header/instagram.png" alt="" /></a>
                <a href="#"><img src="/Socials/header/linkedin.png" alt="" /></a>
                <a href="#"><img src="/Socials/header/youtube.png" alt="" /></a>
            </div>
        </div>

        {/* Main Navigation */}
        
        <div className="flex items-center justify-between py-2 bg-white/90 backdrop-blur-lg border-[1px] border-black/10">
            {/* Container for Navigation Items */}
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="/home">
                    <img src="/New_logo.png" alt="" className="h-12"/>
                </a>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-5">
                    {navItems.map((item, index) => (
                        <li key={index}>
                        <a href={item.href} className="text-base">{item.name}</a>
                    </li>
                    ))}
                </ul>
                <button onClick={mobileNav} className="md:hidden">
                    {mobile ? <X /> : <Menu />}
                </button>
                {mobile && (
                    <ul className="absolute top-16 bg-white left-0 text-blue-950 py-4 w-full flex flex-col gap-1 shadow-lg">
                        {navItems.map((item, index) => (
                            <li key={index} className="w-full py-1 border-b-2 border-black/10">
                                <a href={item.href} className="inline-block text-base text-center  w-full py-2">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar