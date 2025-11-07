import Image from "next/image";
import Donate from "./donateButton";
import NavMenu from "./navMenu";

import { NavSection } from '@/app/components/HomePage/navMenu'

interface HeaderProps {
    NavMenuList: NavSection[];
}

export default function Header ( { NavMenuList } : HeaderProps){
    return (
        <div className="flex w-full h-20 items-center justify-between text-sm lg:text-base bg-[#F70B54]">
            <div className="flex w-full h-7/4 z-2">
                <Image
                    className="mt-15 ml-5"
                    src="/RizalLogo2.svg"
                    alt="Rizal Center logo"
                    width={250}
                    height={200}
                    priority
                />
            </div>
            <NavMenu NavMenuList = {NavMenuList}/>
        </div>

    );
}