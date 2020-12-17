import Link from 'next/link'
import { NavItem } from './index'

type OwnProps = {
    link: NavItem
}

const MobileNavMenuItem = ({ link: { path, label } }: OwnProps) => (
    <Link href={path}>
        <a className='block mb-2 text-white font-semibold hover:bg-white hover:text-black rounded px-4 py-2'>
            {label}
        </a>
    </Link>
)

export default MobileNavMenuItem
