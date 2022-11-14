const express = require('express')
const controller = require('../../controllers/user')
const router = express.Router()
const { authMiddleware } = require("../middleware/Auth");

router.post('/', async (req, res) => {
    controller.create(req, res)
})

router.post('/login', async (req, res) => {
    controller.login(req, res)
})

module.exports = router