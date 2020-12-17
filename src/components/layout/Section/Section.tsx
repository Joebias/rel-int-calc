import { FC } from 'react'

interface OwnProps {
    title: string
    id?: string
    color?: string
    isPageTitle?: boolean
    style?: string
}

const animationClasses = 'transition-colors duration-500'

const Section: FC<OwnProps> = ({ title, id, children, color, isPageTitle = false, style = '' }) => {
    return (
        <section
            id={id || title}
            className={'my-4 border-8 border-t-0 border-primary rounded shadow ' + animationClasses + style}
            style={{ borderColor: color }}
        >
            <div
                className={'px-4 py-2 pt-3 bg-primary text-white text-2xl uppercase font-bold ' + animationClasses}
                style={{ backgroundColor: color }}
            >
                {isPageTitle ? <h1>{title}</h1> : <h2>{title}</h2>}
            </div>
            <div className={'p-1 bg-primary ' + animationClasses} style={{ backgroundColor: color }}>
                <div className='px-8 py-4 rounded bg-white'>{children}</div>
            </div>
        </section>
    )
}

export default Section
