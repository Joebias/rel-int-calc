import { MouseEvent } from 'react'
import React, { FC } from 'react'
import yeet from '../../utils/functions/yeet'

interface OwnProps {
    text: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    positive?: boolean
    negative?: boolean
    className?: string
}

const Button: FC<OwnProps> = ({
    text,
    onClick,
    positive = false,
    negative = false,
    className = '',
}) => {
    return (
        <button
            className={`button ${yeet(positive, 'positive')} ${yeet(
                negative,
                'negative'
            )} focus:outline-none`}
            onClick={onClick}
            type='button'
        >
            {text}
        </button>
    )
}

export default Button
