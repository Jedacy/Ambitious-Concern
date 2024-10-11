
const ContactForm = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto py-16 flex flex-col md:flex-row gap-8">

        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-Ronoto-Slab font-extrabold text-xl md:text-2xl leading-6 md:leading-8">Contact Us Now</h1>
            <p className="text-white/90 font-Poppins leading-4 md:leading-5 max-w-96 font-light text-xs md:text-base">Join the happy millions who have worked with us. Don’t miss this opportunity</p>
          </div>
          
          <div className="pt-8">
            <form action="" method="POST" encType="multipart/form-data" className="flex flex-col gap-3">
              <div>
                <input type="text" placeholder="Full name" className="text-sm md:text-base bg-white p-3 border border-none outline-primary rounded-md w-full placeholder:text-primary/80 placeholder:font-semibold"  required/>
              </div>

              <div>
                <input type="email" placeholder="Email" className="text-sm md:text-base bg-white p-3 border border-none outline-primary rounded-md w-full placeholder:text-primary/80 placeholder:font-semibold" required/>
              </div>

              <div>
                <input type="text" placeholder="Telephone" className="text-sm md:text-base bg-white p-3 border border-none outline-primary rounded-md w-full placeholder:text-primary/80 placeholder:font-semibold" required/>
              </div>

              <div>
                <textarea name="" id="" placeholder="Message" rows={5}  className="text-sm md:text-base bg-white p-3 border border-none outline-primary rounded-md w-full placeholder:text-primary/80 placeholder:font-semibold resize-none"></textarea>
              </div>

              <div>
                <input type="submit" className="text-base bg-white/40 p-3 border border-none rounded-md w-1/2 font-bold uppercase md:text-xl text-blue-950 hover:bg-white/60 transition-all" required/>
              </div>
              

            </form>
          </div>

        </div>

        <div className="w-full md:w-1/2">
        {/* <iframe style="height:100%;width:100%;border:0;" src="https://www.google.com/maps/embed/v1/place?q=Accra+East+Legon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
        </iframe> */}
        <h2 className="text-white font-Ronoto-Slab font-extrabold text-xl md:text-2xl leading-6 md:leading-8 pt-8">Where are we located?</h2>
        <p className="font-Poppins text-white/90 text-xs md:text-base">Look us up on the google map below</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31763.674198289453!2d-0.21168456678110453!3d5.646493093612581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7dd4389017%3A0x8a140595c282296d!2sLegon%2C%20Accra!5e0!3m2!1sen!2sgh!4v1728651260203!5m2!1sen!2sgh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-4/5 border-8 rounded-md mt-6"></iframe>

        </div>

      </div>
    </div>
  )
}

export default ContactForm