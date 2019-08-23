var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function () {
  console.log('completing task: ' + this.name);
  this.completed = true;
}
Task.prototype.save = function () {
  console.log('Saving task: ' + this.name);
}

var myTask = new Task('My legacy task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('notify smthing important');
};

urgentTask.complete();

urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this);
}

urgentTask.save();
