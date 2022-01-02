

const express = require("express")
const router = express.Router();

const {loggin, dashboard} = require('../controllers/main');
const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware,dashboard);
router.route('/login').post(loggin)

module.exports = router