const fs = require('fs')
const express = require('express')
const todosService = require('./express-service-todo')
const todosController = express.Router()

todosController.get('/todos', (req,res) => {
    return res.json(todosService.getTodos());
})

todosController.post('/todo', (req,res) => {
    const { task, description } = req.body;

    const newTask = todosService.addTask(task, description)

    const filePath = __dirname + '/data.json'

    fs.appendFile(filePath, JSON.stringify(newTask), function(err) {
		if (err) { 
            throw err 
        }
		res.status(200).json({
			message: "File successfully written"
	})})

    // res.end(console.log(newTask));
    return res.status(201).json(newTask);
})

todosController.delete('/todo/:id', (req,res)=> {
    const { id } = req.body;

    const deleteTask = todosService.deleteTask(id)

    return res.status(201).json(deleteTask);
})

todosController.patch('/todo/:id', (req,res)=> {
    const { id, editedTask, editedDesc } = req.body;

    const editTask = todosService.deleteTask(id, editedTask, editedDesc )
    return res.status(201).json(deleteTask);
})


exports.todosController = todosController;