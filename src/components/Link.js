import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ isActive, onClick, children }) => {
  if (isActive) {
    return <span>{children}</span>;
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
