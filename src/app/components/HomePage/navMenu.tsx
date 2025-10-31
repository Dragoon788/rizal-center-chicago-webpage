'use client';
import Link from "next/link"
import Donate from "./donateButton"
import HamburgerMenu from "./hamburgerMenu"
import NavItem from './navItem'

import { Bars3Icon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

export interface NavSection {
    primaryLink: string;
    secondaryLinks: string[];
}

interface NavMenuProps {
    NavMenuList: NavSection[];
}

export default function NavMenu ( { NavMenuList } : NavMenuProps) {
    
    return(
        <>
            <div className="w-full absolute z-10">
                <nav className="hidden md:flex justify-center gap-5">
                    {NavMenuList.map((item) => 
                        <NavItem key={item.primaryLink} navCat={item}/>
                    )}
                    {/* <div className="w-10 h-10">
                        <Bars3Icon />
                    </div> */}
                </nav>
                {/* <nav className="flex md:hidden justify-center gap-2">
                    <div className="w-10 h-10">
                        <Bars3Icon />
                    </div>
                </nav> */}
            </div>
            <Donate />
            <div className="relative flex md:hidden m-5">
                <HamburgerMenu NavMenuList={NavMenuList}/>
            </div>
        </>
    );
}