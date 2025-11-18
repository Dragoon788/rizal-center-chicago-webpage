import Image from "next/image";
import Header from "@/app/components/HomePage/header"
import BannerCarousel from "@/app/components/HomePage/bannerCarousel";
import EventsViewer from '@/app/components/HomePage/eventsViewer';
import Footer from "@/app/components/HomePage/footer";

import { NavSection } from '@/app/components/HomePage/navMenu'


export default function Home() {
  const navLinks: NavSection [] = [{primaryLink: {label: "Home"}, 
                                      secondaryLinks: [{label: "Our Mission", href: "mission"},
                                                      {label: "Answers", href: "answers"}, 
                                                      {label: "YouTube", href: "youtube"},
                                                      {label: "Long, Long, Long, Long Answer", href:"longanswer"}]}, 
                                  {primaryLink: {label: "Events"}, secondaryLinks: []},
                                  {primaryLink: {label: "Community"}, secondaryLinks: []},
                                  {primaryLink: {label: "Contribute"}, secondaryLinks: []},
                                  {primaryLink: {label: "About"}, secondaryLinks: []}
                                ]
  return (
    <div className="h-screen bg-neutral-50">
      <Header NavMenuList = {navLinks}/>
      <BannerCarousel imageSources={["/RizalPhoto1.jpg", "/DSC06951.jpg", "/IMG_0125.jpeg", "/pgr12wmmnv161.jpg"]}/>
      <h2 className="m-10 text-3xl text-black font-bold">Upcoming Events</h2>
      <EventsViewer upcomingEvents={["Karate", "Bingo", "Martial Arts", "Bingo", "Food Drive"]} />
      <Footer/>
    </div>
  );
}
