import Link from 'next/link'
import { NavItem } from '.'

type OwnProps = {
    navLinks: NavItem[]
}

const NavMenu = ({ navLinks }: OwnProps) => (
    <>
        {navLinks.map((link, i) => (
            <span
                key={link.label}
                className={`hidden lg:inline-block ${i > 0 ? 'ml-5' : ''}`}
            >
                <Link href={link.path}>
                    <a className='hover:bg-white hover:text-black rounded px-4 py-2'>
                        {link.label}
                    </a>
                </Link>
            </span>
        ))}
    </>
)

export default NavMenu
