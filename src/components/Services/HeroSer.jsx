import Card from "./Card"


const HeroSer = () => {
  return (
    <div className="relative -z-10">
        <div className="bg-service_hero bg-cover h-[70vh]">
            <div className="bg-overlay opacity-90 h-full">
                <div className='container mx-auto flex flex-col justify-center h-full'>
                    <h1 className='font-Poppins font-extrabold text-3xl md:text-5xl text-white'>Services</h1>
                    <p className="text-white pt-5">Home {">"} Services</p>
                </div>
            </div>
            
        </div>

        <div className="container mx-auto pt-36">
            <p className="Poppins font-bold text-lg text-center">What we Provide?</p>
            <h2 className="font-Ronoto-Slab text-3xl font-bold max-w-[20ch] mx-auto pt-4 text-heading">Custom software, web development, analytics.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 pt-20">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSer