import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import Link from 'next/link'
import Router from 'next/router'
import withAuthUser from '../utils/pageWrappers/withAuthUser'
import withAuthUserInfo from '../utils/pageWrappers/withAuthUserInfo'
import logout from '../utils/auth/logout'
import PageLayout from '../components/layout/PageLayout'

const Index = (props) => {
    const { AuthUserInfo, data } = props
    const AuthUser = get(AuthUserInfo, 'AuthUser', null)
    const { favoriteFood } = data

    return (
        <PageLayout title='User Profile'>
            <p>Hi there!</p>
            {!AuthUser ? (
                <p>
                    You are not signed in.{' '}
                    <Link href={'/login'}>
                        <a>Sign in</a>
                    </Link>
                </p>
            ) : (
                <div>
                    <p>You're signed in. Email: {AuthUser.email}</p>
                    <p
                        style={{
                            display: 'inlinelock',
                            color: 'blue',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                        onClick={async () => {
                            try {
                                await logout()
                                Router.push('/')
                            } catch (e) {
                                console.error(e)
                            }
                        }}
                    >
                        Log out
                    </p>
                </div>
            )}
            <div>
                <Link href={'/example'}>
                    <a>Another example page</a>
                </Link>
            </div>
            <div>
                <div>Your favorite food is {favoriteFood}.</div>
            </div>
        </PageLayout>
    )
}

// Just an example.
const mockFetchData = async (userId) => ({
    user: {
        ...(userId && {
            id: userId,
        }),
    },
    favoriteFood: 'pizza',
})

Index.getInitialProps = async (ctx) => {
    // Get the AuthUserInfo object. This is set in `withAuthUser.js`.
    // The AuthUserInfo object is available on both the server and client.
    const AuthUserInfo = get(ctx, 'myCustomData.AuthUserInfo', null)
    const AuthUser = get(AuthUserInfo, 'AuthUser', null)

    // You can also get the token (e.g., to authorize a request when fetching data)
    // const AuthUserToken = get(AuthUserInfo, 'token', null)

    // You can fetch data here.
    const data = await mockFetchData(get(AuthUser, 'id'))

    return {
        data,
    }
}

Index.displayName = 'Index'

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(Index))
