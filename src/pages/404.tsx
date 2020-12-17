import PageLayout from '../components/layout/PageLayout'
import Link from 'next/link'

// pages/404.js
export default function Custom404() {
    return (
        <PageLayout title='404 - Page Not Found'>
            <div className='flex flex-col justify-center text-center'>
                <h1 className='font-bold text-2xl'>404 - Page not found!</h1>
                <div>Oops! That page does not exist.</div>
                <Link href='/'>
                    <button className='mt-8 text-blue'>Go Home</button>
                </Link>
            </div>
        </PageLayout>
    )
}
