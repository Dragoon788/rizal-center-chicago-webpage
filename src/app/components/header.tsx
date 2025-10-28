import Image from "next/image";
import Donate from "./donateButton";
import NavMenu from "./navMenu";

interface HeaderProps {
    NavMenuList: string[];
}

export default function Header ( { NavMenuList } : HeaderProps){
    return (
        <div className="flex w-full h-20 items-center justify-between bg-[#F70B54] text-sm lg:text-base">
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
            {/* <Donate /> */}
        </div>

    );
}