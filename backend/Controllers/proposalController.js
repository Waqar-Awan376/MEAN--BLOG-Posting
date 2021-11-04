const mongodb = require('mongodb');
const Proposal = require('../Models/proposal');

exports.postProposal = (req, res, next) => {
    const newProposal = new Proposal(req.body.name, req.body.jobTitle, req.body.email, req.body.phoneNumber, req.body.organizationName, req.body.organizationAddress, req.body.organizationWebsite, req.body.projectTitle, req.body.projectDescription, req.body.technicalRequirements, req.body.studentDuties, req.body.studentBenefits, req.body.provision);
    newProposal.save().then((result) => {
        res.status(200).json({
            status: true,
            message: "Successfully added a new Proposal"
        })
    }).catch(err => console.log(err));
}
exports.updateProposal = (req, res, next) => {
    const propId = req.params.proposalId;
    console.log(propId);
    const newProposal = new Proposal(req.body.name, req.body.jobTitle, req.body.email, req.body.phoneNumber, req.body.organizationName, req.body.organizationAddress, req.body.organizationWebsite, req.body.projectTitle, req.body.projectDescription, req.body.technicalRequirements, req.body.studentDuties, req.body.studentBenefits, req.body.provision, propId);
    newProposal.save().then((result) => {
        res.status(200).json({
            status: true,
            message: "Successfully updated Proposal"
        })
    }).catch(err => console.log(err));
}
exports.getProposals = (req, res, next) => {
    Proposal.fetchAllProposals().then((responseData) => {
        res.status(200).json({
            status: true,
            message: "Successfully fetched full list of proposals",
            proposals: responseData
        })
    }).catch(err => console.log(err));

}
exports.getProposalById = (req, res, next) => {
    const propId = req.params.proposalId;
    Proposal.getById(propId).then((responseData) => {
        res.status(200).json({
            status: true,
            message: "Successfully got Proposal by Id",
            proposal: responseData
        })
    }).catch(err => console.log(err));

}

exports.deleteProposal = (req, res, next) => {
    const propId = req.body.proposalId;
    Proposal.deleteById(propId).then(() => {
        res.status(200).json({
            status: true,
            message: "Successfully deleted Proposal"
        })
    }).catch(err => console.log(err));
}
