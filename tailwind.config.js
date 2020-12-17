/* Blue:        #131945
 * Yellow:      #EEC643
 * White:       #EEF0F2
 * Black        #14000C
 */

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
            black: '#14000C',
            white: { pure: 'white', DEFAULT: '#EEF0F2' }, // '#F0EFF4',
            background: {
                light: '#1A2260',
                DEFAULT: '#131945',
                darker: '#121740',
                dark: '#0D1130',
            },
            yellow: {
                light: '#F1D26A',
                lighter: '#EFCC57',
                DEFAULT: '#EEC643', // '#3993DD',
                darker: '#EABB1F',
                dark: '#E0B115',
            },
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
            grey: {
                light: '#E7E9ED',
                DEFAULT: '#d0d4dc',
                dark: '#b9bfca',
            },
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    plugins: [],
}
