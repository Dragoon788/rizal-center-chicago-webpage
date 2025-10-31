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

    return(
        <Link href={`/${navCat.primaryLink.toLowerCase()}`} className="hover:opacity-50 m-5" onMouseEnter={handleHover}>
            {navCat.primaryLink}
            <ul className="flex flex-col bg-gray-500">
                {navCat.secondaryLinks.map((subLink) => 
                    <Link 
                        key={subLink}
                        href={`/${subLink.toLowerCase()}`}
                        className="hover:opacity-50"
                    >
                        {subLink}
                    </Link>
                )}
            </ul>
        </Link>
    );
}