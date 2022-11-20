const express = require('express')
const controller = require('../../controllers/trails')
const router = express.Router()
const { authMiddleware } = require("../middleware/Auth");

router.post('/', async (req, res) => {
    controller.create(req, res)
})

router.get('/categories', async (req, res) => {
    controller.listCategories(req, res)
})


router.post('/category', authMiddleware('Super'), async (req, res) => {
    controller.createCategory(req, res)
})

module.exports = router