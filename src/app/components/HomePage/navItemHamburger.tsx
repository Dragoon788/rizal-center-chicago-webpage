import Link from 'next/link'
import { NavSection } from './navMenu'
import { useState } from 'react'
import NavLinkPage from './navLink'

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

interface NavItemHamburgerProps {
    navCat: NavSection;
}

export default function NavItemHamburger ({ navCat } : NavItemHamburgerProps) {
    // Component that handles the NavLink functionality in the HamburgerMenu

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        if (navCat.secondaryLinks.length != 0){
            setOpen(!open);
        }
    } 

    return(
        <div className="text-[#F70B54] w-40 m-3">
            <section className="flex flex-row justify-between w-full">
                <NavLinkPage link={navCat.primaryLink} linkStyle="hover:opacity-50"/>
                <button onMouseDown={handleToggle} className="w-3/4">
                    <ChevronDownIcon className={`h-5 w-5 mr-2 ml-auto ${(navCat.secondaryLinks.length==0||open)&&"hidden"}`}/>
                    <ChevronUpIcon className={`h-5 w-5 mr-2 ml-auto ${!open&&"hidden"}`}/>
                </button>
            </section>
            <div className={`pt-5 ${!open&&"hidden"}`}>
                <ul className={"flex flex-col"}>
                    {/* Maybe instead of links to separate pages, I could have
                    Links to different parts of the same page */}
                    {navCat.secondaryLinks.map((subLink) => 
                        <NavLinkPage key={subLink.label} link={subLink} linkStyle="hover:opacity-50 opacity-100 mb-2 mt-2 ml-3"/>
                    )}
                </ul>
            </div>
        </div>

    );
}