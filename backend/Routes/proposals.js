const express = require('express');
const router = express.Router();
const proposalController = require('../Controllers/proposalController');

router.post('/postProposal', proposalController.postProposal);
router.post('/deleteProposal', proposalController.deleteProposal);
router.get('/getProposals', proposalController.getProposals);
router.get('/getProposalById/:proposalId', proposalController.getProposalById);
router.post('/updateProposal/:proposalId', proposalController.updateProposal);

module.exports = router;