

const Latest = () => {
  return (
    <div className="mt-20 pt-10 pb-44 py mb-80 bg-steps_to_take bg-cover relative">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-between items-center">
            <div>
                <h2 className="font-Ronoto-Slab font-extrabold text-white text-center md:text-left text-xl md:text-2xl lg:text-3xl leading-6 md:leading-8">Want to get the latest updates?</h2>
                <h2 className="font-Ronoto-Slab font-extrabold text-white text-center md:text-left text-xl md:text-2xl lg:text-3xl leading-6 md:leading-8">Stay connected with us</h2>
            </div>

            <form method="POST" encType="multipart/form-data" className="border-2 border-white rounded-md flex items-center p-1">
                <input type="text" placeholder="Enter your email" className="text-sm md:text-base py-2 bg-transparent text-white placeholder:text-white border-none outline-none" required/>
                <input type="submit" className="bg-white text-heading font-Poppins text-sm md:text-base font-semibold uppercase rounded-md ml-7 py-2 px-2 md:px-4 hover:bg-btn-hover hover:text-white transition-all" value={"Subscribe"}/>
            </form>

            
        </div>

        <div className="container mx-auto overflow-y-scroll flex gap-10 border-b-8 bg-white border-primary py-10 justify-between absolute top-[400px] md:top-[350px] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-5 items-center justify-center min-w-60 md:min-w-0">
                <div>
                    <img src="/services_images/icon container.png" alt="" className="w-28 md:w-auto"/>
                </div>
                
                <h2 className="font-Ronoto-Slab font-extrabold text-heading text-xl">Take Action</h2>
                <p className="max-w-[25ch] text-center font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center min-w-60 md:min-w-0">
                <div>
                    <img src="/services_images/icon container.png" alt="" className="w-28 md:w-auto"/>
                </div>
                
                <h2 className="font-Ronoto-Slab font-extrabold text-heading text-xl">Take Action</h2>
                <p className="max-w-[25ch] text-center font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center min-w-60 md:min-w-0">
                <div>
                    <img src="/services_images/icon container.png" alt="" className="w-28 md:w-auto"/>
                </div>
                
                <h2 className="font-Ronoto-Slab font-extrabold text-heading text-xl">Take Action</h2>
                <p className="max-w-[25ch] text-center font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

           
        </div>
    </div>
  )
}

export default Latest