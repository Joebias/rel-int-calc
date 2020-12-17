import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import { AuthUserInfoContext } from '../auth/hooks'

// Provides an AuthUserInfo prop to the composed component.
const withAuthUserInfo = (ComposedComponent) => {
    const WithAuthUserInfoComp = (props) => {
        const { AuthUserInfo: AuthUserInfoFromSession, ...otherProps } = props
        return (
            <AuthUserInfoContext.Consumer>
                {(AuthUserInfo) => (
                    <ComposedComponent
                        {...otherProps}
                        AuthUserInfo={AuthUserInfo || AuthUserInfoFromSession}
                    />
                )}
            </AuthUserInfoContext.Consumer>
        )
    }

    WithAuthUserInfoComp.getInitialProps = async (ctx) => {
        const AuthUserInfo = get(ctx, 'myCustomData.AuthUserInfo', null)

        // Evaluate the composed component's getInitialProps().
        let composedInitialProps = {}
        if (ComposedComponent.getInitialProps) {
            composedInitialProps = await ComposedComponent.getInitialProps(ctx)
        }

        return {
            ...composedInitialProps,
            AuthUserInfo,
        }
    }

    WithAuthUserInfoComp.displayName = `WithAuthUserInfo(${ComposedComponent.displayName})`

    WithAuthUserInfoComp.defaultProps = {}

    return WithAuthUserInfoComp
}

export default withAuthUserInfo
