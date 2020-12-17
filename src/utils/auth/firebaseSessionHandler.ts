import fetch from 'isomorphic-unfetch'

export const setSession = (user) => {
    // Log in.
    if (user) {
        return user.getIdToken().then((token) => {
            return fetch('/api/auth/login', {
                method: 'POST',
                // eslint-disable-next-line no-undef
                headers: new Headers({ 'Content-Type': 'application/json' }),
                credentials: 'same-origin',
                body: JSON.stringify({ token }),
            })
        })
    }

    // Log out.
    return fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'same-origin',
    })
}
