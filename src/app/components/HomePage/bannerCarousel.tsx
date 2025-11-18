'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';

import ImageTitle from './imageTitle';

interface BannerCarouselProps{
    imageSources: string[];
}

export default function BannerCarousel ({ imageSources } : BannerCarouselProps){
    return (
        <>
            <ImageTitle displayText={"Welcome to the Rizal Center"}/>
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
                        <div className="relative w-full h-[200px] md:h-[350px] flex items-center justify-center">
                            <Image src={source} alt={source} fill={true} style={{ objectFit: 'cover' }} />
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}