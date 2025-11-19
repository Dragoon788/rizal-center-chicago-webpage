'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
// import Event from "";

import { Grid, Pagination, Navigation, Scrollbar } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface EventsViewerProps {
    upcomingEvents: string[]
}

export default function EventsViewer ( {upcomingEvents} : EventsViewerProps){
    return(
        <div className="ml-auto mr-auto w-3/4 m-5 bg-green-500">
            <Swiper
                // pagination={true}
                // navigation={true}
                // centeredSlides={true}
                slidesPerView={3}
                grid={{
                    rows:1
                }}
                centeredSlides={true}
                spaceBetween={20}
                scrollbar={true}
                // mousewheel={true}
                modules= {[Grid, Pagination, Navigation, Scrollbar]}
            >
                {upcomingEvents.map((eventInfo, i) => 
                    <SwiperSlide key={i} className="">
                        <div className="flex items-center justify-center h-20 md:h-40 bg-blue-500">
                            {eventInfo}
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );

}