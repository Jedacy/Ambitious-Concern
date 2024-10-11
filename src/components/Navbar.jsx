import { X, Menu } from "lucide-react"
import { navItems } from "../Constants"

const Navbar = () => {
  return (
    <div className="font-Poppins sticky -top-10">
        {/* Banner to host the social icons */}
        <div className="bg-primary py-2 flex gap-4 justify-between">
            {/* Social Icons */}
            <div></div>
            <div className="flex gap-4 items-center justify-center pr-24 text-white">
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
                <a href="#home">
                    <img src="/New_logo.png" alt="" className="h-12"/>
                </a>

                {/* Navigation Links */}
                <ul className="flex gap-5">
                    {navItems.map((item, index) => (
                        <li key={index}>
                        <a href={item.href} className="text-base">{item.name}</a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar