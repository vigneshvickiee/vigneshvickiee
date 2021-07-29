const express = require('express');
const router = express.Router();
const Student = require('../models/st')

const main=require('../controllers/controls');

router.get('/get-details',main.fetchDetails)

router.post('/add-details',main.addDetails)

router.patch('/update-details',main.updateDetails)

router.delete('/delete-details',main.deleteDetails)

module.exports = router