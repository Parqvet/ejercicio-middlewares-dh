function adminMiddleware(req, res, next) {
    const user = req.query.user;
    if(user == 'Ada' || user == 'Greta' || user == 'Vim' || user == 'Tim') {
        next();
    } else {
        res.send('No tienes privilegios como administrador');
    }
}

module.exports = adminMiddleware;