import React from 'react'
import styled from 'styled-components'
import properties from '../../_settings/_properties'

export default React.forwardRef((props, ref) => {
  return (
    <StyledTextArea {...props} ref={ref} />
  )
})

const StyledTextArea = styled.textarea(props => `
  background: ${properties.THEME_COLOR.BASE};
  border: ${props.border || `2px solid ${properties.COLOR.GRAY}`};
  border-radius: ${props.borderRadius || ".25rem"};
  height: ${props.styleHeight || "100%"};
  outline: none;
  padding: ${props.padding || ".5rem"};
  resize: ${props.resize || "none"};
  transition: ${props.transition || ".2s ease"};
  width: ${props.styleWidth || "100%"};
  :focus {
    background: ${properties.COLOR.WHITE};
    border-color: ${properties.THEME_COLOR.MAIN};
  }
  :not(:placeholder-shown) {
    background: ${properties.COLOR.WHITE};
  }
`)
