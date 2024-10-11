import Button from "../Button"


const Expectations = () => {
  return (
    <div className="container mx-auto py-20 flex flex-col md:flex-row gap-5 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
                <h4 className="font-Poppins font-bold text-sm md:text-base">What to expect</h4>
                <h2 className="font-Ronoto-Slab font-extrabold text-heading text-xl md:text-2xl leading-6 md:leading-8">High-quality services through transparency, communication, and strong client partnerships</h2> 
            </div>
            

            <p className="text-paragraph/70 font-Poppins text-sm md:text-base text-justify md:text-left">Our services are built on a foundation of trust and reliability, ensuring that every project meets the highest quality standards. We follow industry best practices and maintain transparency throughout the development process, keeping clients informed at every stage. With a proven track record of successful projects across various industries, we prioritize clear communication and adhere to strict deadlines without compromising quality.We maintain strong client relationships, focusing on long-term partnerships and adapting quickly to changing needs. Our commitment to ethical practices and continuous improvement further strengthens our credibility, making us a dependable partner for your software development needs.</p>      

            <Button name="Know More About Us" link="/contact" width={"1/2"}/>
        </div>

        <div className="w-full md:w-1/2">
            <img src="/homepage_images/expectations.png" alt="" />
        </div>
        
    </div>
  )
}

export default Expectations