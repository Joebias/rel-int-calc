import Link from 'next/link'

const Footer = () => (
    <footer className='pt-2 px-4 bg-offwhite text-white uppercase font-bold flex flex-col sm:flex-row justify-between pb-4 sm:pb-2'>
        <div className='flex self-center p-2'>&copy; Tin Pot Team 2020</div>
        <div className='flex flex-col sm:flex-row sm:divide-x divide-grey'>
            <div className='text-center sm:text-right px-2 sm:my-2'>
                <Link href='help'>
                    <a>Help</a>
                </Link>
            </div>
            <div className='text-center sm:text-right px-2 sm:my-2'>
                <Link href='legal/privacy'>
                    <a>Privacy Policy</a>
                </Link>
            </div>
            <div className='text-center sm:text-right px-2 sm:my-2'>
                <Link href='legal/terms-and-conditions'>
                    <a>Terms & Conditions</a>
                </Link>
            </div>
        </div>
    </footer>
)

export default Footer
