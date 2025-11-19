import Image from 'next/image';

import Header from '@/app/components/HomePage/header';   
import ImageTitle from '@/app/components/HomePage/imageTitle';
import { NavSection } from '@/app/components/HomePage/navMenu'


export default function Community () {
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
        <>
            <Header NavMenuList={navLinks}/>
            <div className="relative w-full h-[200px] md:h-[350px] flex items-center justify-center">
                <Image src={"/RizalPhoto1.jpg"} alt={"/RizalPhoto1.jpg"} fill={true} style={{ objectFit: 'cover' }} />
                <ImageTitle displayText={"Community"}/>
            </div>
        </>

    );
}