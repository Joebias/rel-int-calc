import MobileNavMenuItem from './MobileNavMenuItem'

const MobileNavMenu = ({ display, navlinks: navLinks }) => {
    return (
        <div
            className={`px-2 pt-2 pb-4 text-center ${
                display ? 'block' : 'hidden'
            }`}
        >
            {navLinks.map((link) => (
                <MobileNavMenuItem link={link} key={link.label} />
            ))}
        </div>
    )
}

export default MobileNavMenu
