import Image from "next/image";
import Header from "@/app/components/header"
import BannerCarousel from "@/app/components/bannerCarousel";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <Header NavMenuList = {["Home", "Events", "Community", "Contribute", "About"]}/>
      <BannerCarousel imageSources={["/RizalPhoto1.jpg", "/DSC06951.jpg", "/IMG_0125.jpeg", "/pgr12wmmnv161.jpg"]}/>
      <h2 className="m-10 text-3xl text-black font-bold">Upcoming Events</h2>
    </div>
  );
}
