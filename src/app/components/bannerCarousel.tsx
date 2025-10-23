'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, EffectFade } from 'swiper/modules';



interface BannerCarouselProps{
    imageSources: string[];
}

export default function BannerCarousel ({ imageSources } : BannerCarouselProps){
    return (
        <div className="w-full h-[400px]">
            <Swiper
                effect={'fade'}
                centeredSlides = {true}
                autoplay={{
                    delay: 10000,
                }}
                loop={true}
                speed = {2000}
                modules={[Autoplay, EffectFade]}
            >
                {imageSources.map((source, i) => 
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-[400px] flex items-center justify-center">
                            <Image src={source} alt={source} fill={true} objectFit="cover" />
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}