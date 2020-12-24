/* Blue:        #131945
 * Yellow:      #EEC643
 * White:       #EEF0F2
 * Black        #14000C
 */

const colors = {
    black: '#14000C',
    white: { pure: 'white', DEFAULT: '#EEF0F2' }, // '#F0EFF4',
    plumb: {
        light: '#E0DEB8',
        lighter: '#DAD7AA',
        DEFAULT: '#D0cD94',
        darker: '#C7C37F',
        dark: '#C1BD71',
    },
    yellow: {
        light: '#3f273e',
        lighter: '#331f31',
        DEFAULT: '#241623',
        darker: '#291091',
        dark: '#0d080c',
    },
    green: {
        DEFAUT: '#2D4739',
    },
    grey: {
        light: '#1a1f23',
        DEFAULT: '#121619',
        dark: '#090A0C',
    },

    white: '#FFFFFF',
}

const primary = colors.yellow
const secondary = colors.plumb
const background = colors.grey

module.exports = {
    purge: ['./src/**/*.tsx', './src/**/*.jsx'],
    theme: {
        extend: {
            fontFamily: {
                title: ['SiteTitle', 'sans-serif'],
                handwritten: ['PatrickHand', 'sans-serif'],
            },
        },
        colors: {
            background: background,
            primary: primary,
            secondary: secondary,
            positive: {
                light: '#6fb668',
                DEFAULT: '#5FAD56',
                dark: '#519749',
            },
            negative: {
                faded: '#9c3046',
                DEFAULT: '#7D2638',
                dark: '#5e1d2a',
            },
            ...colors,
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    plugins: [],
}
