// All teacher Routes

import express from 'express'
const router = express.Router()

router.get('/all', (req, res) => { 
    res.send('All Teacher')
})
router.post('/create', (req, res) => { 
    res.send('New Teacher created')
})
router.put('/update', (req, res) => { 
    res.send('Teacher Updated')
})
router.delete('/all', (req, res) => { 
    res.send('Teacher deleted')
})

// module.exports = router

export default router