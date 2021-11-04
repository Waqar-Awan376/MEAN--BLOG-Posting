const getDb = require('../Utils/database').getDb;
const mongodb = require('mongodb');

class Proposal {
    constructor(name, jobTitle, email, phoneNumber, orgName, orgAddress, orgWebsite, projectTitle, projectDescription, technicalRequirements, studentDuties, studentBenefits, provision, id) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.orgName = orgName;
        this.orgAddress = orgAddress;
        this.orgWebsite = orgWebsite;
        this.projectTitle = projectTitle;
        this.projectDescription = projectDescription;
        this.technicalRequirements = technicalRequirements;
        this.studentDuties = studentDuties;
        this.studentBenefits = studentBenefits;
        this.provision = provision;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }
    save() {
        const db = getDb();
        if (this._id) {
            return db.collection('projects').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this }).then((result) => {
                console.log(result);
            }).catch(err => console.log(err));
        }
        else {
            return db.collection('projects').insertOne(this).then((result) => {
                console.log(result);
            }).catch(err => console.log(err));
        }
    }
    static fetchAllProposals() {
        const db = getDb();
        return db.collection('projects').find().toArray().then(result => {
            return result;
        }).catch(err => console.log(err));
    }
    static deleteById(proposalId) {
        const db = getDb();
        return db.collection('projects').deleteOne({ _id: new mongodb.ObjectId(proposalId) }).then(result => {
            console.log("Deleted");
        }).catch(err => console.log(err));
    }
    static getById(proposalId) {
        const db = getDb();
        return db.collection('projects').find({ _id: new mongodb.ObjectId(proposalId) }).next().then(result => {
            console.log(result);
            return result;
        }).catch(err => console.log(err));
    }
}

module.exports = Proposal;