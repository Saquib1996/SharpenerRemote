module.exports=reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('<h1>Please Provide age</h1>')
    }
    else if (req.query.age < 18) {
        res.send('<h1>You can not access this page</h1>')
    }
    else {
        next();
    }

}