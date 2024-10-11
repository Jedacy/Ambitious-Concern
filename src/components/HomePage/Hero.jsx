
const Hero = () => {
  return (
    <div className="container mx-auto flex gap-4 items-center pt-6">
        {/* Hero Section */}
        <div className="w-1/2">
        <div className="flex flex-col gap-6">
            <h1 className="text-heading font-extrabold font-Ronoto-Slab text-hxl leading-10">Transforming Ideas into Innovative Software Solutions for a Digital Future.</h1>
            <p className="text-paragraph/70 font-Poppins">We develop custom software, web and mobile applications, and data analytics solutions to drive business success</p>
            <a href="" className="bg-btn-primary text-center py-3 text-white font-Poppins font-bold rounded-md w-1/2 text-xl hover:bg-btn-hover transition-all">Get in Touch</a>
        </div>
        {/* Analytics Section */}
        <div className="flex gap-2 mt-20">
            <p className="bg-cyan px-10 py-4 text-white font-Poppins font-semibold flex flex-col justify-center items-center rounded-md text-base leading-5"><span className="text-3xl font-bold leading-6">120k</span>Designs</p>
            <p className="bg-cyan px-10 py-4 text-white font-Poppins font-semibold flex flex-col justify-center items-center rounded-md text-base leading-5"><span className="text-3xl font-bold leading-6">120k</span>Designs</p>
            <p className="bg-cyan px-10 py-4 text-white font-Poppins font-semibold flex flex-col justify-center items-center rounded-md text-base leading-5"><span className="text-3xl font-bold leading-6">120k</span>Designs</p>
        </div>
            
        </div>

        <div className="w-1/2">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero