import {
    DocumentReference,
    FirestoreWhere,
    lazy,
    toDocData,
} from './DatastoreUtilities'

export class DatastoreEndpoint<Model> {
    protected DB: DocumentReference
    protected collection: string
    protected from: (...any) => Model
    protected to: (data: Partial<Model>) => Model

    constructor(
        DB: DocumentReference,
        collection: string,
        parseDataFromStore = lazy,
        parseDataBeforeStoring = lazy
    ) {
        this.DB = DB
        this.collection = collection
        this.from = parseDataFromStore
        this.to = parseDataBeforeStoring
    }

    async read(documentId: string): Promise<Model> {
        try {
            const collectionReference = this.DB.collection(this.collection)
            const documentReference = collectionReference.doc(documentId)
            const documentSnapshot = await documentReference.get()
            const documentData = toDocData(documentSnapshot)
            return this.from(documentData)
        } catch (e: any) {
            console.log(Error)
        }
    }

    async create(data: Model, id: string = null): Promise<string> {
        try {
            const collectionReference = this.DB.collection(this.collection)
            if (!!id) {
                collectionReference.doc(id).set(data)
                return id
            } else {
                const documentReference = await collectionReference.add(data)
                return documentReference.id
            }
        } catch (e: any) {
            console.log(Error)
        }
    }

    async update(id: string, data: Partial<Model>): Promise<void> {
        try {
            const collectionReference = this.DB.collection(this.collection)
            const documentReference = collectionReference.doc(id)
            documentReference.update(data)
        } catch (e: any) {
            console.log(Error)
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const collectionReference = this.DB.collection(this.collection)
            const documentReference = collectionReference.doc(id)
            documentReference.delete()
        } catch (e: any) {
            console.log(Error)
        }
    }

    async list(where?: FirestoreWhere, limit: number = 10): Promise<Model[]> {
        try {
            const collectionReference = this.DB.collection(
                this.collection
            ).limit(limit)
            if (!!where) {
                const querySnapshot = await collectionReference
                    .where(...where)
                    .get()
                return [...querySnapshot.docs].map(toDocData).map(this.from)
            } else {
                const querySnapshot = await collectionReference.get()
                return [...querySnapshot.docs].map(toDocData).map(this.from)
            }
        } catch (e: any) {
            console.log(Error)
        }
    }
}
