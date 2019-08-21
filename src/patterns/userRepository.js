
var repo = function () {

  var db = {};
  // construct db here, this is private

  var get = function (id) {
    console.log('Getting user ' + id);
    return {
      name: 'Jojo'
    }
  };

  var save = function (user) {
    console.log('Saving ' + user.name + ' to the db');
  };

  // Service API is below
  return {
    get: get,
    save: save
  }
}
module.exports = repo;
