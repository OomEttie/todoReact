const Todo = require("../models").Todo;

module.exports = {
  create(data) {
    return Todo.create({
      title: data
    });
  },
  list(req, res) {
    return Todo.all();
  }
};

// create(data) {
//   return Todo.create({
//     title: data
//   })
//     .then(todo => {
//       console.log(todo);
//       return todo;
//     })
//     .catch(error => {
//       console.log(error);
//       return error;
//     });
// }
