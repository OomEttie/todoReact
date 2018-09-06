const Todo = require('../models').Todo;
const todoItem = require('./todoItem');

module.exports = {
  create(body) {
    return Todo.create({
      title: body.title
    });
  },
  list(req, res) {
    return Todo.findAll();
    // return Todo.findAll().then(todoData => {
    //   let newObject = {};
    //   return todoData.map(todoDataItem => {
    //     newObject = {
    //       newObject,
    //       ...todoDataItem.dataValues
    //     };
    //     this.getTodoItemsByTodoId(1).then(todoItemsData => {
    //       newObject = {
    //         ...newObject,
    //         todoItems: todoItemsData
    //       };
    //       console.log(newObject);
    //       return newObject;
    //     });
    //   });
    // });
  },
  getById(req, res) {
    return Todo.findById(req.params.todoId);
  },
  getTodoItemsByTodoId(id) {
    return todoItem.listByTodoId(1).then(todoItemDataRetrieve => {
      // return 'this should be easy';
      return todoItemDataRetrieve.map(mapData => {
        let todoItemDataNewObject = {
          ...mapData.dataValues
        };
        return todoItemDataNewObject;
      });
    });
  }
};

// return todoData.map(todoDataItem => {
//   return todoItem.listByTodoId(1).then(todoItemData => {
//     return {
//       ...todoDataItem
//     };
//   });
// });

// return newObject;
// return todoData.map(todoDataItem => {
//   return todoItem.listByTodoId(1).then(todoData => {
//     // return newObject;
//     // console.log(newObject);
//   });
//   // console.log(newObject);
//   // res.status(200).send(newObject);
// });
// // return new Promise((resolve, reject) => {
// //   resolve(newObject);
// //   reject('error');
// // });
// return newObject;

// .catch(error => res.status(400).send(error));

// .then((todos: any) => res.status(200).send(todos))
// .catch((error: any) => res.status(400).send(error));

// console.log(todoItemsRetrieved);
// return todoItemsRetrieved;

// const todoMapped = todoRetrieved.map(itemTodoRetrieved => {
//   const todoItemsMapped = todoItem
//     .listByTodoId(1)
//     .then(todoItemsRetrieved => {
//       return todoItemsRetrieved.map(todoItemsRetrievedItem => {
//         return todoItemsRetrievedItem.dataValues;
//       });
//     })
//     .then(data => {
//       const newObject = {
//         ...itemTodoRetrieved.dataValues,
//         todoItems: data
//       };
//       return newObject;
//     })
//     .catch(error => {
//       return null;
//     });

//   console.log(todoItemsMapped)
// });

// return todoMapped;

// todoItem.listByTodoId(1).then(todoitems => {
//   const todoItemsMapped = todoitems.map(item => {
//     return item.dataValues;
//   });
//   console.log(todoItemsMapped);
// });
// return todo;
