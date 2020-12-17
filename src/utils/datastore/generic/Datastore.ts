import { DatastoreEndpoint } from './DatastoreEndpoint'
import { DocumentReference, lazy } from './DatastoreUtilities'

type Users = {
    name: string
    id: string
    age: number
}

export function createDatastore(DB: DocumentReference) {
    return {
        users: new DatastoreEndpoint<Users>(DB, 'users', lazy, lazy),
    }
}
