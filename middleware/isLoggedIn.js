module.exports = function(req, res, next) {
    // check if there is not a user
    if (!req.user) {
        req.flash('error', 'YOu must be logged in to access this page')
        res.redirect('/auth/login');
    } else {
        next();
    }
        // send scathing message
        // redirect to login page
    // 
        // carry on
}