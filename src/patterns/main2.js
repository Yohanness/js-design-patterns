var Task = require('./task');
var repoFactory = require('./repoFactory2');

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;
console.log(task1);
task1.save();


var obj = function(){
  return {name: 'toto',
  desc: 'Desc'
}
}();
console.log(Object.keys(obj));
console.log(obj.prototype);


// var task2 = new Task({name: 'Create demo for modules'});
// var task3 = new Task({name: 'Create demo for singleton'});
// var task4 = new Task({name: 'Create demo for prototypes'});

// task1.complete();
// task2.save();
// task3.save();
// task4.save();

