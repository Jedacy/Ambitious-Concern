import TestimonialCard from "./TestimonialCard"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swipercus.css';
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {


    return (
        <div className='bg-testimonial bg-no-repeat bg-center bg-cover py-20'>
            <div className='container mx-auto'>
            <p className='text-paragraph font-Poppins text-xs md:text-base font-bold'>Testimonials</p>
            <h1 className='font-Ronoto-Slab font-extrabold text-xl md:text-2xl lg:text-3xl text-heading mb-10 max-w-[30ch] leading-6 md:leading-8'>Real Experiences, Real Results: Hear from Our Satisfied Clients.</h1>
            

            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}


            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            }}
            >
                <div className="flex justify-between">
                    <SwiperButtonPrev><ArrowLeft className="bg-primary rounded-md w-10 text-white py-[2px]"/></SwiperButtonPrev>
                    <SwiperButtonNext><ArrowRight className="bg-primary rounded-md w-10 text-white py-[2px]"/></SwiperButtonNext>
                </div>

                <SwiperSlide><TestimonialCard /></SwiperSlide>
                <SwiperSlide><TestimonialCard /></SwiperSlide>
                <SwiperSlide><TestimonialCard /></SwiperSlide>
                <SwiperSlide><TestimonialCard /></SwiperSlide>
            </Swiper>
            
            
            </div>
        </div>
    )
}

export default Testimonials