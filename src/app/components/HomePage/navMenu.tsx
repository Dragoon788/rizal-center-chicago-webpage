'use client';
import Donate from "./donateButton"
import HamburgerMenu from "./hamburgerMenu"
import NavItem from './navItem'

export interface NavSection {
    primaryLink: NavLink;
    secondaryLinks: NavLink[];
}

export interface NavLink {
    label: string;
    href?: string;
}

interface NavMenuProps {
    NavMenuList: NavSection[];
}

export default function NavMenu ( { NavMenuList } : NavMenuProps) {
    // Component to handle the look and design of the overall NavMenu
    return(
        <>
            <div className="w-full absolute z-10">
                <nav className="hidden md:flex justify-center gap-5">
                    {NavMenuList.map((item) => 
                        <NavItem key={item.primaryLink.label} navCat={item}/>
                    )}
                </nav>
            </div>
            <Donate />
            <div className="relative flex md:hidden m-5">
                <HamburgerMenu NavMenuList={NavMenuList}/>
            </div>
        </>
    );
}