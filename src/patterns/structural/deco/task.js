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
// myTask.complete();
// myTask.save();


// Create constructor that "extends" Task constructor
var UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

// Pass Mother prototype
UrgentTask.prototype = Object.create(Task.prototype);

// Create and Redefine methods
UrgentTask.prototype.notify = function() {
  console.log('notify smthing important');
};
UrgentTask.prototype.save = function() {
  this.notify();
  Task.prototype.save.call(this);
};

var ut = new UrgentTask('This is urgent',1);
ut.complete();
ut.save();
console.log(ut);
