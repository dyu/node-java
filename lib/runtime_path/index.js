var path = require('path')
var dirname = __dirname
var rp = {
    java_require: function(resource) {
        return require('../../' + resource)
    },
    java_resolve: function(resource) {
        return path.resolve(dirname, '../../', resource)
    }
}
module.exports = rp
