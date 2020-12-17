import { FC, MouseEvent } from 'react'

interface OwnProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    menuOpen: boolean
}

const BurgerMenuButton: FC<OwnProps> = ({ onClick, menuOpen }) => (
    <button
        onClick={onClick}
        type='button'
        className='block text-gray-500 hover:text-black focus:text-black focus:outline-none'
    >
        <svg className='h-6 w-6 fillCurrent' viewBox='0 0 24 24'>
            {menuOpen ? (
                <path
                    fillRule='evenodd'
                    d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
            ) : (
                <path
                    fillRule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
            )}
        </svg>
    </button>
)

export default BurgerMenuButton
