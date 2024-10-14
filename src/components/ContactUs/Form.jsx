
const Form = () => {
  return (
    
    <form action="" encType="multipart/form-data" method="POST">
      <div>
        <label htmlFor="name" className="font-Poppins font-semibold block pb-1 text-sm md:text-base">Full Name</label>
        <input type="text" id="name"  className="w-full h-12 border-2 border-primary/50 rounded-md py-2 px-3 focus:outline-primary" required/>
      </div>

      <div className="pt-5">
        <label htmlFor="email" className="font-Poppins font-semibold block pb-1 text-sm md:text-base">Email</label>
        <input type="email" id="email"  className="w-full h-12 border-2 border-primary/50 rounded-md py-2 px-3 focus:outline-primary" required/>
      </div>

      <div className="pt-5">
        <label htmlFor="phone" className="font-Poppins font-semibold block pb-1 text-sm md:text-base">Phone Number</label>
        <input type="text" id="phone"  className="w-full h-12 border-2 border-primary/50 rounded-md py-2 px-3 focus:outline-primary" />
      </div>

      <div className="pt-5">
        <label htmlFor="message" className="font-Poppins font-semibold block pb-1 text-sm md:text-base">Message</label>
        <textarea name="" id="message" rows={6} className=" resize-none w-full border-2 border-primary/50 rounded-md py-2 px-3 focus:outline-primary" required></textarea>
      </div>

      <div className="pt-5">
        <input type="submit" id=""  className="w-full md:w-1/2 float-right border-2 bg-primary text-white uppercase rounded-md py-3 px-3 font-bold text-base md:text-lg"/>
      </div>

      
    </form>
  )
}

export default Form