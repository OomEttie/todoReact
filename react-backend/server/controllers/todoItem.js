const TodoItem = require('../models').TodoItem;

module.exports = {
  create(todoId, bodyContent) {
    return TodoItem.create({
      content: bodyContent,
      todoId: todoId
    });
  },
  list(req, res) {
    return TodoItem.findAll();
  },
  listByTodoId(id) {
    return TodoItem.findAll({
      where: {
        todoId: id
      }
    });
  }
};
