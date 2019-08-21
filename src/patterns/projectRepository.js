
var repo = function () {

  var db = {};
  // construct db here, this is private

  var get = function (id) {
    console.log('Getting project ' + id);
    return {
      name: 'new Project'
    }
  };

  var save = function (project) {
    console.log('Saving ' + project.name + ' to the db');
  };

  // Service API is below
  return {
    get: get,
    save: save
  }
}
module.exports = repo;
