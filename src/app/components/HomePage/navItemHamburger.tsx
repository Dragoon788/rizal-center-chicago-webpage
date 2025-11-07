import Link from 'next/link'
import { NavSection } from './navMenu'
import { useState } from 'react'

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

interface NavItemHamburgerProps {
    navCat: NavSection;
}

export default function NavItemHamburger ({ navCat } : NavItemHamburgerProps) {

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        if (navCat.secondaryLinks.length != 0){
            setOpen(!open);
        }
    } 

    return(
        <div className="text-[#F70B54] w-40 m-3 " onMouseDown={handleToggle}>
            <button className="flex flex-row justify-between w-full">
                <Link href={`/${navCat.primaryLink.toLowerCase()}`} className="hover:opacity-50">
                    {navCat.primaryLink}
                </Link>
                <ChevronDownIcon className={`h-5 w-5 mr-2 ${(navCat.secondaryLinks.length==0||open)&&"hidden"}`}/>
                <ChevronUpIcon className={`h-5 w-5 mr-2 ${!open&&"hidden"}`}/>
            </button>
            <div className={`pt-5 ${!open&&"hidden"}`}>
                <ul className={"flex flex-col"}>
                    {/* Maybe instead of links to separate pages, I could have
                    Links to different parts of the same page */}
                    {navCat.secondaryLinks.map((subLink) => 
                        <Link 
                            key={subLink}
                            href={`/${subLink.toLowerCase()}`}
                            className="hover:opacity-50 opacity-100 mb-2 mt-2 ml-3"
                        >
                            {subLink}
                        </Link>
                    )}
                </ul>
            </div>
        </div>

    );
}