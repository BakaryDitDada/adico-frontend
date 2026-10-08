import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.styles';

export const Form = ({ 
  children, 
  onSubmit, 
  layout = 'vertical', 
  className, 
  id,
  noValidate = true 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <StyledForm 
      id={id}
      onSubmit={handleSubmit} 
      $layout={layout}
      className={className}
      noValidate={noValidate} // Custom validation via RTK/React preferred
    >
      {children}
    </StyledForm>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  layout: PropTypes.oneOf(['vertical', 'horizontal', 'grid']),
  className: PropTypes.string,
  id: PropTypes.string,
  noValidate: PropTypes.bool,
};