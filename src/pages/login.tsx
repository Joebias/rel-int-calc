import React from 'react'
import FirebaseAuth from '../components/util/auth/FirebaseAuth'
import PageLayout from '../components/layout/PageLayout'

const Auth = () => {
    return (
        <PageLayout title='Sign In'>
            <p>Sign in</p>
            <div>
                <FirebaseAuth />
            </div>
        </PageLayout>
    )
}

export default Auth
