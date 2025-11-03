import Image from "next/image";
import Header from "@/app/components/HomePage/header"
import BannerCarousel from "@/app/components/HomePage/bannerCarousel";
import EventsViewer from '@/app/components/HomePage/eventsViewer';

import { NavSection } from '@/app/components/HomePage/navMenu'


export default function Home() {
  const navLinks: NavSection [] = [{primaryLink: "Home", secondaryLinks: ["Our Mission", "Answers", "YouTube", "Long, Long, Long, Long Answer"]}, 
                                  {primaryLink: "Events", secondaryLinks: []},
                                  {primaryLink: "Community", secondaryLinks: []},
                                  {primaryLink: "Contribute", secondaryLinks: []},
                                  {primaryLink: "About", secondaryLinks: []}
                                ]
  return (
    <div className="h-screen bg-white">
      <Header NavMenuList = {navLinks}/>
      <BannerCarousel imageSources={["/RizalPhoto1.jpg", "/DSC06951.jpg", "/IMG_0125.jpeg", "/pgr12wmmnv161.jpg"]}/>
      <h2 className="m-10 text-3xl text-black font-bold">Upcoming Events</h2>
      <EventsViewer upcomingEvents={["Karate", "Bingo", "Martial Arts"]} />
    </div>
  );
}
