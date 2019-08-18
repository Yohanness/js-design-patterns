var Task = require('./task');


var task1 = new Task('Create demo for constructors');
var task2 = new Task('Create demo for modules');
var task3 = new Task('Create demo for singleton');
var task4 = new Task('Create demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();

