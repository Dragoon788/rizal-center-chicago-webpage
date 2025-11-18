import Link from 'next/link'
import { NavLink } from './navMenu'

interface NavLinkProps {
    link: NavLink;
    linkStyle: string;
}

export default function NavLinkPage ( {link, linkStyle} : NavLinkProps) {
    // Simple component used to minimize reusable code across next/Link representation for navigating pages.
    return (
        <Link href={`/${link.href ? link.href.toLowerCase() : link.label.toLowerCase()}`} className={linkStyle}>
            {link.label}
        </Link>
    );
}