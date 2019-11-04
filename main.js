var id = 0;

function tasks(){
	var tasksArray = [];
	var tasks = {};

	tasks.addTask = addTask;
	tasks.tasksArray = tasksArray;
	tasks.changeTaskStatus = changeTaskStatus;
	tasks.getFilteredTasks = getFilteredTasks;

	return tasks;
}

function task(text){
	var task = {};

	task.id = id++;
	task.text = text;
	task.status = "not-completed";

	return task;
}

function createTask(text) {
	var t = task(text);
	return t;
}

var addTask = function(task){
	this.tasksArray.push(task);
}

var changeTaskStatus = function(id, status){
	this.tasksArray.forEach(function(el, i){
		if (el.id === id) {
			el.status = status;
			return 'task status changed';
		}
	});
}

var getFilteredTasks = function(operation){
	return this.tasksArray.filter(function(element){
		if(operation === 0){
			return element.status === 'completed';
		}
		if(operation === 1){
			return element.status === 'removed';	
		}
		return element.status === 'not-completed';
	})
}

var taskObjects = tasks();


$('#add-btn').on('click', function(){
	var taskHTML = $('<div></div>')
	var taskText = $('#input-text').val();
	var task = createTask(taskText)
	taskHTML.attr('id', task.id);
	var li = $(`<li></li>`);
	li.text(task.id + ' - ' + taskText);
	li.appendTo(taskHTML);
	taskHTML.appendTo('ul');
	var removeButton = $('<button id="remove-btn"> remove </button>');
	taskObjects.addTask(task);
	console.log(taskObjects.tasksArray)
})









