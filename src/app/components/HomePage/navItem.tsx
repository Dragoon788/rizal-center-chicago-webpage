import Link from 'next/link'
import { useState } from 'react'
import { NavSection } from './navMenu'
import NavLinkPage from './navLink';

interface NavItemProps {
    navCat: NavSection;
}

export default function NavItem ({ navCat } : NavItemProps) {
    // Component for handling NavLink functionality for page redirecting
    const [active, setActive] = useState(false);

    const handleHover = () => {
        if (navCat.secondaryLinks.length != 0){
            setActive(true);
        }
    } 

    const handleExitHover = () =>{
        if (navCat.secondaryLinks.length != 0){
            setActive(false);
        }
    }

    return(
        <div className="relative" onMouseEnter={handleHover} onMouseLeave={handleExitHover}>
            <NavLinkPage link={navCat.primaryLink} linkStyle="hover:opacity-50 m-3"/>
            <div className={`absolute pt-5 ${!active&&"hidden"}`}>
                <ul className={"flex flex-col w-50 text-[#F70B54] rounded-xl bg-neutral-50 "}>
                    {/* Maybe instead of links to separate pages, I could have
                    Links to different parts of the same page */}
                    {navCat.secondaryLinks.map((subLink) => 
                        <NavLinkPage key={subLink.label} link={subLink} linkStyle="hover:opacity-50 mb-2 mt-2 ml-3"/>
                    )}
                </ul>
            </div>
        </div>

    );
}