

const Latest = () => {
  return (
    <div className="mt-20 pt-10 pb-44 py mb-80 bg-steps_to_take bg-cover relative">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <h2 className="font-Ronoto-Slab font-extrabold text-white text-xl md:text-2xl lg:text-3xl leading-6 md:leading-8">Want to get the latest updates?</h2>
                <h2 className="font-Ronoto-Slab font-extrabold text-white text-xl md:text-2xl lg:text-3xl leading-6 md:leading-8">Stay connected with us</h2>
            </div>

            <div className="border-2 px-1  border-white rounded-md flex items-center h-16">
                <input type="text" placeholder="Enter your email" className=" py-2 bg-transparent text-white placeholder:text-white border-none outline-none" required/>
                <input type="submit" className="bg-white text-heading font-Poppins font-bold uppercase rounded-md py-3 px-2" value={"Subscribe"}/>
            </div>

            
        </div>

        <div className="container mx-auto flex gap-10 border-b-8 bg-white border-primary py-10 justify-between absolute top-[350px] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-5 items-center justify-center">
                <div>
                    <img src="/services_images/icon container.png" alt="" />
                </div>
                
                <h2 className="font-Ronoto-Slab font-extrabold text-heading text-xl">Take Action</h2>
                <p className="max-w-[25ch] text-center font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center">
                <div>
                    <img src="/services_images/icon container.png" alt="" />
                </div>
                
                <h2 className="font-Ronoto-Slab font-extrabold text-heading text-xl">Take Action</h2>
                <p className="max-w-[25ch] text-center font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center">
                <div>
                    <img src="/services_images/icon container.png" alt="" />
                </div>
                
                <h2 className="font-Ronoto-Slab font-extrabold text-heading text-xl">Take Action</h2>
                <p className="max-w-[25ch] text-center font-Poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

           
        </div>
    </div>
  )
}

export default Latest