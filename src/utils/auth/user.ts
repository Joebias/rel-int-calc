export const createAuthUser = (firebaseUser) => {
    if (!firebaseUser || !firebaseUser.uid) {
        return null
    }
    return {
        id: firebaseUser.uid,
        email: firebaseUser.email,
        emailVerified: firebaseUser.emailVerified || firebaseUser.email_verified,
    }
}

export const createAuthUserInfo = ({ firebaseUser = null, token = null } = {}) => {
    return {
        AuthUser: createAuthUser(firebaseUser),
        token,
    }
}
