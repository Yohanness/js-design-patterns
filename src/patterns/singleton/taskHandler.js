var repo = require('./Repo');

var myrepo = repo();

var taskHandler = function () {
  return {
    save: function () {
      myrepo.save('Hi from taskHandler');
    }
  }
}

module.exports = taskHandler();
