const NotFoundError = require('../Errors/NotFoundError');
const todos = []

exports.create = (title, done) => {
  const id = todos.push({ title, done})-1;
  return todos[id];
}

exports.all = () => todos;

exports.delete = id => {
  if (!todos[id]) throw new NotFoundError(`No todo with ID ${id}`);

  delete todos[id]
  return id
}

exports.update = (id, title, done) => {
  if (!todos[id]) throw new NotFoundError(`No todo with ID ${id}`);

  todos[id] = {title, done};
  return todos[id]
}