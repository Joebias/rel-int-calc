import * as admin from 'firebase-admin'

export const initializeFirebaseAdmin = () => {
    const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_PRIVATE_CLIENT_EMAIL,
                privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
            }),
            databaseURL: process.env.FIREBASE_DATABASE_URL,
        })
    }
}

export const verifyIdToken = (token) => {
    initializeFirebaseAdmin()

    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error
        })
}

initializeFirebaseAdmin()

export const AdminFirestore = admin.firestore()
