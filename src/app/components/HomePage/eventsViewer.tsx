'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
// import Event from "";

import { Grid, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface EventsViewerProps {
    upcomingEvents: string[]
}

export default function EventsViewer ( {upcomingEvents} : EventsViewerProps){
    return(
        <div className="w-full h-[300px]">
            <Swiper
                // pagination={true}
                navigation={true}
                // centeredSlides={true}
                slidesPerView={3}
                grid={{
                    rows:1
                }}
                modules= {[Grid, Pagination, Navigation]}
            >
                {upcomingEvents.map((eventInfo, i) => 
                    <SwiperSlide key={i}>
                        {eventInfo}
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );

}