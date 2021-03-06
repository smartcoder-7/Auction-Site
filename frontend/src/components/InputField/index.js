import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Label, Input, FormFeedback, FormGroup, FormText } from 'reactstrap'
import { sanitizeFormError } from 'utils/form'


class InputField extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    helpText: PropTypes.string,
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    radioValue: PropTypes.string
  }

  static defaultProps = {
    type: 'text',
  }

  render() {
    const {
      children,
      className,
      helpText,
      input,
      label,
      meta: { error, touched },
      options,
      placeholder,
      size,
      type,
      radioValue
    } = this.props
    const fieldError = touched && error

    if (type === 'checkbox') {
      const checkedExtra = {}
      if (input.value && !input.checked) {
        checkedExtra.checked = true
      }
      return (
        <FormGroup className={className}>
          <Label check>
            <Input type={type} {...input} placeholder={placeholder} size={size}
              valid={fieldError ? false : undefined} children={children} {...checkedExtra} />
            {label}
          </Label>
          {fieldError && <FormFeedback>{sanitizeFormError(error)}</FormFeedback>}
          {helpText && !fieldError && <FormText>{helpText}</FormText>}
        </FormGroup>
      )
    } else if (type === 'radio') {
      const { value, onChange, ..._input } = input
      return (
        <FormGroup className={className}>
          <Label check>
            <Input onChange={onChange} checked={radioValue === value}
              type={type} {..._input} placeholder={placeholder} size={size}
              valid={fieldError ? false : undefined} children={children} value={radioValue} />
            {label}
          </Label>
          {fieldError && <FormFeedback>{sanitizeFormError(error)}</FormFeedback>}
          {helpText && !fieldError && <FormText>{helpText}</FormText>}
        </FormGroup>
      )
    } else {
      return (
        <FormGroup className={className}>
          {label && <Label>{label}</Label>}
          <Input type={type} {...input} placeholder={placeholder} size={size}
            valid={fieldError ? false : undefined} children={children}
          >
            {type === 'select' && options ? [
              <option value={''} key={''}>-- Please select an option --</option>,
              ...options.map(option => (
                <option key={option.key} value={option.key}>{option.value}</option>
              ))
            ] : undefined}
          </Input>
          {fieldError && <FormFeedback>{sanitizeFormError(error)}</FormFeedback>}
          {helpText && !fieldError && <FormText>{helpText}</FormText>}
        </FormGroup>
      )
    }
  }
}

export default InputField
