import Link from 'next/link'
import React, { FC } from 'react'
import yeet from '../../utils/functions/yeet'

interface OwnProps {
    text: string
    href: string
    positive?: boolean
    negative?: boolean
    className?: string
}

const LinkButton: FC<OwnProps> = ({ text, href, positive = false, negative = false, className = '' }) => {
    return (
        <Link href={href}>
            <a className={`button ${yeet(positive, 'positive')} ${yeet(negative, 'negative')}`}>{text}</a>
        </Link>
    )
}

export default LinkButton
