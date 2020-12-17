require('dotenv').config()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    env: {
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
        FIREBASE_PUBLIC_API_KEY: process.env.FIREBASE_PUBLIC_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,

        FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID,
        FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
        FIREBASE_PRIVATE_CLIENT_EMAIL: process.env.FIREBASE_PRIVATE_CLIENT_EMAIL,

        SESSION_SECRET_CURRENT: process.env.SESSION_SECRET_CURRENT,
        SESSION_SECRET_PREVIOUS: process.env.SESSION_SECRET_PREVIOUS,
    },
})
