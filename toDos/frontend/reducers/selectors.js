export function allTodos(todos) {
  const keys = Object.keys(todos);
  const listTodos = keys.map((key) => {
    return todos[key];
  });
  return listTodos;
}