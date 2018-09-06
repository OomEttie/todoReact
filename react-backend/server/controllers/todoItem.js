const TodoItem = require('../models').TodoItem;

module.exports = {
  create(todoId, bodyContent) {
    return TodoItem.create({
      content: bodyContent,
      todoId: todoId
    });
  },
  list(req, res) {
    return TodoItem.findAll()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  }
};
