const testRoute = require('./test-route');
const productsRoute = require('./products-route')

module.exports = function(app, db) {
    testRoute(app, db),
    productsRoute(app, db)
}