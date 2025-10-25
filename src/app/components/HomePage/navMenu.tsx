import Link from "next/link"
import Donate from "./donateButton"

interface NavMenuProps {
    NavMenuList: string[];
}

export default function NavMenu ( { NavMenuList } : NavMenuProps) {
    return(
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