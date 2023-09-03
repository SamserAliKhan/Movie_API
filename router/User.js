const express = require('express');
const router = express.Router();
const controler = require('../controler/UserControler');

router.get('/',controler.get);

module.exports = router;