const todos = []
let _id = 0;
let task_date = new Date()

exports.getTodos = () => todos;

exports.addTask = ({task, description}) => {  
    const newTask = {
        id: _id++,
        date: task_date,
        taskname,
        description,
    };
    
    todos.push(newTask);
    return task;
} 

exports.deleteTask = (id) => {
    let deleteIndex = todos.findIndex(task => task.id == id);
    todos.splice(deleteIndex, 1)

    return todos;
}

exports.editTask = (id, editedTaskname, editedDesc) => {
    todos.map((task) => {
        if(task.id == id){
            task.taskname = editedTaskname;
            task.description = editedDesc;
        }
    })
}