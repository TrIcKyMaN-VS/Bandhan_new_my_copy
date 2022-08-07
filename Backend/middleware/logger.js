function auth(req, res, next){
    console.log("Authenticating...")
    // res.se
    next()
}
function log(req, res, next){
    console.log("Logging...")
    // res.se
    next()
}

module.exports = {log , auth};