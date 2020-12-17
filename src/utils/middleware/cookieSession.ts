import cookieSession from 'cookie-session'

export const addSession = (request, response) => {
    if (!(process.env.SESSION_SECRET_CURRENT && process.env.SESSION_SECRET_PREVIOUS)) {
        throw new Error('Session secrets must be set as env vars.')
    }

    const sessionSecrets = [process.env.SESSION_SECRET_CURRENT, process.env.SESSION_SECRET_PREVIOUS]

    const includeSession = cookieSession({
        keys: sessionSecrets,
    })

    includeSession(request, response, () => {})
}

export default (handler) => (req, res) => {
    try {
        addSession(req, res)
    } catch (e) {
        return res.status(500).json({ error: 'Could not get user session' })
    }
    return handler(req, res)
}
