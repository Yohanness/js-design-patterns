var repo = function() {
  var called = 0;

  var save = function(task) {
    called++;
    console.log('Saving ' + task + ' called ' + called);
  }
  console.log('Newing up Repo');

  return {
    save: save
  }
}

// module.exports = repo();
// OR
module.exports = new repo;
