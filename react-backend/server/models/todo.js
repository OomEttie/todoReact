module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Todo.associate = models => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    });
  };

  return Todo;
};

// todoItems: {
//   type: Sequelize.ARRAY({
//     type: Sequelize.BIGINT,
//     references: {
//       model: TodoItem,
//       key: 'id'
//     }
//   }),
//   async get() {
//     return await models.TodoItem.findAll({
//       where: {
//         todoId: {$in: this.getDataValue('id')}
//       }
//     })
//   }
// }
