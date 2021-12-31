

const express = require("express")
const router = express.Router();

const {loggin, dashboard} = require('../controllers/main');

router.route('/dashboard').get(dashboard);
router.route('/login').post(loggin)

module.exports = router