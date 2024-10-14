import Form from '../components/ContactUs/Form'

const Contact = () => {
  return (

    <div className='relative'>
      <div className="bg-service_hero bg-cover h-[50vh] md:h-[70vh]">
          <div className="bg-overlay opacity-90 h-full">
              <div className='container mx-auto flex flex-col justify-center items-center md:items-start h-full'>
                  <h1 className='font-Poppins font-extrabold text-3xl md:text-5xl text-white'>Contact Us</h1>
                  <p className="text-white pt-5">Home {">"} Contact Us</p>
              </div>
          </div>
          
      </div>

      <div className='bg-contact_us bg-cover bg-no-repeat h-auto md:h-[80vh] lg:h-[90vh] bg-left'>
        <div className="container mx-auto flex flex-col md:flex-row gap-5 py-20">

          <div className='w-full md:w-1/2 flex flex-col justify-between items-center md:items-start gap-5 relative'>
              <div>
                <h1 className='font-Ronoto-Slab font-extrabold text-3xl md:text-4xl lg:text-5xl text-center md:text-left '>Let's get in <span className='text-primary'>Touch</span></h1>
                <p className='text-paragraph/80 font-Poppins pt-4 max-w-[35ch] text-center md:text-left text-sm md:text-base'>Have a question or need assistance? Reach out to us via email, 
                phone, or the contact form below. We're eager to assist you.</p>
                <p className='font-bold text-sm text-primary text-center md:text-left'>Nice hearing from you!</p>
              </div>

              <div className='pt-1 md:pt-5'>
                <img src="/asiedu.png" alt="" className='md:h-[400px] lg:h-[500px] object-cover hidden md:block '/>
              </div>
            </div>

            <div className='w-full md:w-1/2'>
              <Form />
            </div>

        </div>         
      </div>
      
      
    </div>
  )
}

export default Contact