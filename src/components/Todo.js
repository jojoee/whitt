import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, isCompleted, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none',
      color: isCompleted ? 'red' : 'black',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
