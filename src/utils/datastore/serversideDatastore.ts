import { FIRESTORE_SITE_DOCUMENT_PATH } from '../constants'
import { AdminFirestore, initializeFirebaseAdmin } from '../auth/firebaseAdmin'
import { createDatastore } from './generic/Datastore'

initializeFirebaseAdmin()

const DB = AdminFirestore.doc(FIRESTORE_SITE_DOCUMENT_PATH)

const datastore = createDatastore(DB)

export default datastore
