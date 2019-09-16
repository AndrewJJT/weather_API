var controllers = require('./controllers')

module.exports = function(app){
    app.get('/gethome', controllers.homepage)
}