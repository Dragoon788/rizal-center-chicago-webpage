import Link from 'next/link'
import { useState } from 'react'
import { NavSection } from './navMenu'

interface NavItemProps {
    navCat: NavSection;
}

export default function NavItem ({ navCat } : NavItemProps) {
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
            <Link href={`/${navCat.primaryLink.toLowerCase()}`} className="hover:opacity-50 m-3">
                {navCat.primaryLink}
            </Link>
            <div className={`absolute pt-5 bg-gray-500 ${!active&&"hidden"}`}>
                <ul className={"flex flex-col w-50"}>
                    {navCat.secondaryLinks.map((subLink) => 
                        <Link 
                            key={subLink}
                            href={`/${subLink.toLowerCase()}`}
                            className="hover:opacity-50 mb-2 mt-2 ml-3"
                        >
                            {subLink}
                        </Link>
                    )}
                </ul>
            </div>
        </div>

    );
}