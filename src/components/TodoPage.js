import React from 'react';
import AddTodo from './../containers/AddTodo';
import FilterLink from './../containers/FilterLink';
import VisibleTodoList from './../containers/VisibleTodoList';

const TodoPage = () => {
  return (
    <div>
      <h2>TodoPage</h2>

      <AddTodo />
      <VisibleTodoList />

      <div className="filter">
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </div>
    </div>
  );
};

export default TodoPage;
