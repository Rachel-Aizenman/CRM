import { observable } from 'mobx'

export class Client {
    @observable _id
    @observable name
    @observable email 
    @observable firstContract
    @observable emailType
    @observable sold
    @observable owner
    @observable country

    constructor(id, name, email, firstContact, emailType, sold, owner, country) {
        this._id = id
        this.name = name
        this.email = email
        this.firstContact = firstContact
        this.emailType = emailType
        this.sold = sold
        this.owner = owner
        this.country = country
    }
}

