import React, { useId } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { 
  InputContainer, 
  Label, 
  StyledInput, 
  HelperText, 
  ErrorMessage,
  IconWrapper 
} from './InputField.styles';

export const InputField = React.forwardRef(({
  name,
  label,
  type = 'text',
  error,
  helperText,
  required = false,
  disabled = false,
  iconStart,
  iconEnd,
  className,
  ...props
}, ref) => {
  const generatedId = useId();
  const inputId = props.id || generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;
  
  const hasError = Boolean(error);

  return (
    <InputContainer className={className}>
      {label && (
        <Label htmlFor={inputId} $hasError={hasError}>
          {label}
          {required && <span className="required-asterisk" aria-hidden="true">*</span>}
        </Label>
      )}

      {iconStart && <IconWrapper $position="start">{iconStart}</IconWrapper>}
      
      <StyledInput
        ref={ref}
        id={inputId}
        name={name}
        type={type}
        disabled={disabled}
        required={required}
        aria-invalid={hasError}
        aria-describedby={`${hasError ? errorId : ''} ${helperText ? helperId : ''}`.trim() || undefined}
        $hasError={hasError}
        $iconStart={Boolean(iconStart)}
        $iconEnd={Boolean(iconEnd)}
        {...props}
      />

      {iconEnd && <IconWrapper $position="end">{iconEnd}</IconWrapper>}

      <AnimatePresence mode="wait">
        {hasError && (
          <ErrorMessage
            id={errorId}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="alert"
          >
            {/* Optional: Add a small SVG alert icon here if desired */}
            {error}
          </ErrorMessage>
        )}
      </AnimatePresence>

      {!hasError && helperText && (
        <HelperText id={helperId}>
          {helperText}
        </HelperText>
      )}
    </InputContainer>
  );
});

InputField.displayName = 'InputField';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  iconStart: PropTypes.node,
  iconEnd: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};