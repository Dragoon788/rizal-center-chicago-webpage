import Link from "next/link"

interface NavMenuProps {
    NavMenuList: string[];
}

export default function NavMenu ( { NavMenuList } : NavMenuProps) {
    return(
        <div className="w-full absolute">
            <div className="flex justify-center gap-2 items-center">
                {NavMenuList.map((item) => 
                    <Link
                    key = {item}
                    href={`/${item}`}
                    className="inline-block m-3 hover:opacity-50"
                    >
                    {item} 
                    </Link>
                )}
            </div>
        </div>
    );
}