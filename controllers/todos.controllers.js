const Todos = require('../models/todos');

  exports.getAll = (req, res) => {
    const todos = Todos.all();
    res.status(200).json(todos);
  }
  exports.create = (req, res) => {
    const todo = Todos.create(req.body.title, req.body.done);
    res.status(201).json(todo);
  }
  exports.delete = (req, res) => {
    const id = Todos.delete(req.params.id);
    res.status(200).json({ id });
  }
  exports.update = (req, res) => {
    const todo = Todos.update(req.params.id, req.body.title, req.body.done);
    res.status(200).json(todo);
  }