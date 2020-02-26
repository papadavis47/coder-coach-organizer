module.exports = function(req, res, next) {
    // check if there is not a user
    if (!req.user) {
        req.flash('error', 'You must be logged in to access this page')
        res.redirect('/auth/login');
    } else {
        next();
    }
        
}