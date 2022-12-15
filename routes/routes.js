const routes = require("express").Router();
const TaskController = require('../controllers/TaskControllers');


routes.get("/home", TaskController.getAll)

module.exports = routes