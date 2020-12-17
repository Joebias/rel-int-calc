import PageLayout from '../components/layout/PageLayout'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ClientsideDatastore from '../utils/datastore/ClientsideDatastore'
import { ContextExclusionPlugin } from 'webpack'
// import { useFirebaseAuth } from '../utils/auth/hooks'

export default () => {
    // const { user, initializing } = useFirebaseAuth()

    const [users, setUsers] = useState([])

    useEffect(() => {
        ClientsideDatastore.users.list().then((userList) => {
            console.log('API Call Example')
            console.log(userList)
            setUsers(userList)
        })
    }, [])

    return (
        <PageLayout title='main'>
            <section className='text-white font-bold text-xl'>
                Hello There?
            </section>
            {users.map((i) => (
                <div>We out here</div>
            ))}
        </PageLayout>
    )
}
