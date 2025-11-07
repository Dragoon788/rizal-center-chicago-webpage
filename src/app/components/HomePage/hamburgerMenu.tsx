import Link from "next/link"
import { useState } from 'react'
import Donate from './donateButton'
import NavItemHamburger from './navItemHamburger'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import { NavSection } from './navMenu';

interface HamburgerMenuProps{
    NavMenuList: NavSection[];
}

export default function HamburgerMenu ( {NavMenuList} : HamburgerMenuProps){
    const [open, setOpen] = useState(false)

    const onOpenMenu = () => {
        setOpen(true);
    }

    return(
        <>
            <button type="button" onClick={() => setOpen(!open)}>
                <Bars3Icon className={`h-10 w-10 ${open && "hidden"}`}/>
                <XMarkIcon className={`h-10 w-10 ${!open && "hidden"}`}/>

            </button>
            <div className="absolute right-0 top-full mt-2 bg-neutral-50 z-5 rounded-lg transition-all ">
                <nav className={`flex flex-col ${!open && "hidden"}`}>
                    {NavMenuList.map((item) => 
                        <NavItemHamburger navCat={item} key={item.primaryLink}/>
                    )}
                    <Donate />
                </nav>
            </div>
        </>
    );
}