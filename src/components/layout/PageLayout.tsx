import Head from 'next/head'
import Header from './header'
import Footer from './Footer'
import { FC } from 'react'
import { Helmet } from 'react-helmet'

type PageProps = {
    title: string
    heading?: string
    className?: string
}

/* PageLayout - provides a standard layout for all page-level components.
 * Also can handle some standard <head> meta tags, such as title, description, nofollow, etc.
 */
const PageLayout: FC<PageProps> = ({
    title,
    heading,
    children,
    className = '',
}) => {
    return (
        <div
            className={`page bg-background flex flex-col h-screen justify-between ${className} mountains-background mountains-background overflow-y-scroll overflow-x-hidden `}
        >
            <Helmet>
                <title>{title}</title>
                <meta name='description' content='Free RI Program Generator' />
            </Helmet>
            <Header />
            <main className='mb-auto p-2 sm:p-8 w-full md:w-3/5 xl:w-1/2 sm:mx-auto text-white'>
                {!!heading && (
                    <h1 className='text-4xl mb-4 text-white font-bold uppercase'>
                        {heading}
                    </h1>
                )}

                <div>{children}</div>
            </main>
            <Footer />
        </div>
    )
}

export default PageLayout
