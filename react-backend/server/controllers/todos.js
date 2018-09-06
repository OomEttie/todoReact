const Todo = require('../models').Todo;
const TodoItem = require('../models/todoitem').TodoItem;

module.exports = {
  create(data) {
    return Todo.create({
      title: data
    });
  },
  list(req, res) {
    console.log('todos-controller-list');
    return Todo.findAll()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
  getById(req, res) {
    return Todo.findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found'
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  }
};
