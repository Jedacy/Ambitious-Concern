
const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center pt-6">
        {/* Hero Section */}
        <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-6">
            <h1 className="text-heading font-extrabold font-Ronoto-Slab text-2xl md:text-3xl lg:text-hxl leading-6 md:leading-7 lg:leading-10">Empowering Ideas, Inspiring Innovation - Let's Create Something Extraordinary Together.</h1>
            <p className="text-paragraph/70 font-Poppins text-[13px] md:text-base">Ambitious Concern is a dynamic creative and tech-driven company committed to empowering businesses with innovative solutions.</p>
            <a href="" className="bg-btn-primary text-center py-3 text-white font-Poppins font-medium md:font-semibold lg:font-bold rounded-md w-1/2 text-sm md:text-lg lg:text-xl hover:bg-btn-hover transition-all">Get in Touch</a>
        </div>
        {/* Analytics Section */}
        <div className="flex gap-2 justify-between mt-10 md:mt-20 border-2 border-primary/10 rounded-md p-3 md:p-6 bg-slate-50 shadow-lg shadow-primary/5">
        
            {/* <div>
              <p className="text-center font-Poppins text-sm md:text-2xl md:leading-6 font-bold"> 100% <br /><span className="font-medium text-sm ">Safe and Secure</span></p>
            </div> */}

            <div className="flex items-center justify-center">
              <p className="text-center font-Poppins text-xl leading-3 md:text-2xl md:leading-6 font-bold"> 100% <br /><span className="font-normal md:font-medium md:text-sm leading-3 text-xs block pt-2">Safe and Secure</span></p>
            </div>

            <div className="border-x-2 border-primary px-2 lg:px-9 flex items-center justify-center">
              <p className="text-center font-Poppins text-xl leading-3 md:text-2xl md:leading-6 font-bold"> 10k+ <br /><span className="font-normal md:font-medium md:text-sm text-xs leading-3 block pt-2">Trusted Partners</span></p>
            </div>

            <div className="flex items-center justify-center">
              <p className="text-center font-Poppins text-xl leading-3 md:text-2xl md:leading-6 font-bold"> 5k+ <br /><span className="font-normal md:font-medium md:text-sm text-xs leading-3 block pt-2">Clients Satisfied</span></p>
            </div>

        </div>


        </div>

        <div className="w-full md:w-1/2">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero