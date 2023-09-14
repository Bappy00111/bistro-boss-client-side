import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import Section from '../../../component/Section/Section';

const Catagore = () => {
    return (
     

            <div className='md:px-[100px]'>
                <Section
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
                >
                </Section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "
                >
                    <SwiperSlide className=''>
                        <img src={slider1} alt="" />
                        <h3 className='lg:text-3xl uppercase text-center md:-mt-20 text-[#FFF;]'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <h3 className='lg:text-4xl uppercase text-center md:-mt-20 text-[#FFF;]'> pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <h3 className='lg:text-4xl uppercase text-center md:-mt-20 text-[#FFF;]'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <h3 className='lg:text-4xl uppercase text-center md:-mt-20 text-[#FFF;]'>desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <h3 className='lg:text-4xl uppercase text-center md:-mt-20 text-[#FFF;]'>Salads</h3>
                    </SwiperSlide>

                </Swiper>
            </div>
        
    );
};

export default Catagore;