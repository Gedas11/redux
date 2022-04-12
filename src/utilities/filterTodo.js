import React from 'react'

const filterTodo = (todo, status) => {
  switch (status) {
      case 'AKTYVIOS':
      return todo.filter(todo => todo.isComplete === false)
      case 'PABAIGTOS':
          return todos.filter(todo =>todo.isComplete === true)
          default: return todo;
  }
}

export default filterTodo