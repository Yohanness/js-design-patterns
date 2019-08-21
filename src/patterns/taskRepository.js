
var repo = function () {

  var db = {};
  // construct db here, this is private

  function get(id) {
    console.log('Getting task ' + id);
    return {
      name: 'new task from db'
    }
  };

  function save(task) {
    console.log('Saving ' + task.name + ' to the db');
  };

  console.log('Newing taskRepo');
  // Service API is below
  return {
    get: get,
    save: save
  }
}
module.exports = repo;

