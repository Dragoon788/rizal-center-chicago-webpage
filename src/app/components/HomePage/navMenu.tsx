'use client';
import Link from "next/link"
import Donate from "./donateButton"
import HamburgerMenu from "./hamburgerMenu"

import { Bars3Icon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

interface NavMenuProps {
    NavMenuList: string[];
}

export default function NavMenu ( { NavMenuList } : NavMenuProps) {
    
    return(
        <>
            <div className="w-full absolute z-10">
                <nav className="hidden md:flex justify-center gap-5">
                    {NavMenuList.map((item) => 
                        <Link
                        key = {item}
                        href={`/${item}`}
                        className="hover:opacity-50"
                        >
                        {item} 
                        </Link>
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
        <div className="w-full absolute z-10">
            <nav className="hidden md:flex justify-center gap-2 items-center">
                {NavMenuList.map((item) => 
                    <Link
                    key = {item}
                    href={`/${item.toLowerCase()}`}
                    className="inline-block m-3 hover:opacity-50"
                    >
                    {item} 
                    </Link>
                )}
            </nav>
            {/* <Donate/> */}
        </div>
    );
}