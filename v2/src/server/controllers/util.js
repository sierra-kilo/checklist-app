// controllers/util.js
function asyncWrap(fn) {
     // Helper to convert promisfy express route handlers
     return function(req, res, next) {
         fn(req, res, next).catch(next);
     }
}
module.exports = {
     asyncWrap,
}
