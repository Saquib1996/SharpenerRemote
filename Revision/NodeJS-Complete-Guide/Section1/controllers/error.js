exports.get4O4 = (req, res, next) => {
    res.status(404).render('4O4', {
        pageTitle: 'Page Not Found',
        path:'/4O4'
    });
}