import firebase from 'firebase/app'
import admin from 'firebase-admin'

export const lazy = (x) => x
export type FirestoreWhere = [string, firebase.firestore.WhereFilterOp, any]

export type QuerySnapshot = firebase.firestore.QuerySnapshot
export type DocumentSnapshot = firebase.firestore.DocumentSnapshot | admin.firestore.DocumentSnapshot
export type DocumentReference = firebase.firestore.DocumentReference | admin.firestore.DocumentReference

export const toDocRefId = (res: DocumentReference) => res.id
export const toDocData = (resp: DocumentSnapshot) => ({ ...resp.data(), id: resp.id })
export const toDocDataWith = (data: any) => (snapshot: DocumentSnapshot) => ({
    ...data,
    ...toDocData(snapshot),
})

export const getDocsData = (querySnapshot: QuerySnapshot) => querySnapshot.docs.map(toDocData)
export const getDocsDataWith = (data: any) => (snapshot: QuerySnapshot) => snapshot.docs.map(toDocDataWith(data))
