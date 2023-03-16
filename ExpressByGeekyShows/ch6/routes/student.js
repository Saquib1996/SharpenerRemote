// All student Routes

import express from 'express'
const router = express.Router()

router.get('/all', (req, res) => {
    res.send('All Student')
})
router.post('/create', (req, res) => {
    res.send('New student created')
})
router.put('/update', (req, res) => {
    res.send('Student Updated')
})
router.delete('/all', (req, res) => {
    res.send('Student deleted')
})

// module.exports = router

export default router