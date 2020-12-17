import Link from 'next/link'
import { useState } from 'react'
import MobileNavMenu from './MobileNavMenu'
import NavMenu from './NavMenu'
import BurgerMenuButton from './BurgerMenuButton'
import { useFirebaseAuth } from '../../../utils/auth/hooks'
import { SITE_TITLE } from '../../../utils/constants'

export type NavItem = { label: string; path: string }

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenuOpen = () => setMenuOpen(!menuOpen)

    const { user, initializing } = useFirebaseAuth()

    const navLinks: NavItem[] = [
        {
            label: 'First Item',
            path: '/nowhere',
        },
        {
            label: 'Another Item',
            path: '/nowhere',
        },
    ]

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
                    <NavMenu navLinks={navLinks} />
                </nav>
                <div className='site-title text-black text-xl sm:text-4xl tracking-widest mx-10 flex justify-center'>
                    <Link href='/'>
                        <a className='flex justify-center flex-col uppercase'>
                            <div>{SITE_TITLE}</div>
                        </a>
                    </Link>
                </div>
                <div className='right-nav self-center ml-auto flex flex-1 justify-center text-black font-bold uppercase'>
                    <span className=''>
                        {!initializing && (
                            <Link href={`/${!!user ? 'user' : 'login'}`}>
                                <a>{!!user ? 'Me' : 'Login'}</a>
                            </Link>
                        )}
                    </span>
                </div>
            </div>
            <MobileNavMenu display={menuOpen} navlinks={navLinks} />
        </header>
    )
}

export default Header
