import Link from 'next/link'
import { useState } from 'react'
import MobileNavMenu from './MobileNavMenu'
import NavMenu from './NavMenu'
import BurgerMenuButton from './BurgerMenuButton'
import { SITE_TITLE } from '../../../utils/constants'

export type NavItem = { label: string; path: string }

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenuOpen = () => setMenuOpen(!menuOpen)

    return (
        <header className='bg-yellow border-b-8 border-yellow-dark shadow-xl'>
            <div className='p-4 flex flex-row justify-center'>
                <nav className='text-black left-nav self-center mr-auto flex flex-1 justify-center uppercase font-bold'>
                    <div className='lg:hidden burgermenu'>
                        <BurgerMenuButton
                            menuOpen={menuOpen}
                            onClick={toggleMenuOpen}
                        />
                    </div>
                </nav>
                <div className='site-title text-white text-xl sm:text-4xl tracking-widest mx-10 flex justify-center'>
                    <Link href='/'>
                        <a className='flex justify-center flex-col uppercase'>
                            <div>{SITE_TITLE}</div>
                        </a>
                    </Link>
                </div>
                <div className='right-nav self-center ml-auto flex flex-1 justify-center text-black font-bold uppercase'></div>
            </div>
        </header>
    )
}

export default Header
