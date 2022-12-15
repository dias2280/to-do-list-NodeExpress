const routes = require("express").Router();
const TaskController = require('../controllers/TaskControllers');


routes.get("/", TaskController.getAllTasks);

routes.post("/create", TaskController.createTask);

module.exports = routes