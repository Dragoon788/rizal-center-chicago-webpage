import Image from "next/image";
import Donate from "./donateButton";
import NavMenu from "./navMenu";

interface HeaderProps {
    NavMenuList: string[];
}

export default function Header ( { NavMenuList } : HeaderProps){
    return (
        <div className="flex w-full h-20 bg-red-500">
            <div className="flex w-full h-6/4 justify-between m-5">
                <Image
                    className="items-center"
                    src="/RizalLogo2.svg"
                    alt="Rizal Center logo"
                    width={250}
                    height={200}
                    priority
                />
                <NavMenu NavMenuList = {NavMenuList}/>
                <Donate />
            </div>
        </div>

    );
}