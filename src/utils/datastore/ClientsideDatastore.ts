import initFirebase from '../auth/initFirebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { FIRESTORE_SITE_DOCUMENT_PATH } from '../constants'
import { createDatastore } from './generic/Datastore'

initFirebase()

const DB = firebase.firestore().doc(FIRESTORE_SITE_DOCUMENT_PATH)

const datastore = createDatastore(DB)

export default datastore
