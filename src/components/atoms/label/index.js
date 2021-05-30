import React from 'react'
import styled from 'styled-components'  
import properties from '../../_settings/_properties'

const Label = ({children, ...props}) => {
  return (
    <StyledLabel {...props}>{children}</StyledLabel>
  )
}

const StyledLabel = styled.label(props => `
  background: transparent;
  color: ${properties.COLOR.GRAY_DARK};
  cursor: text;
  font-size: ${properties.FONT.SIZE_S};
  left: 0;
  line-height: ${props.lineHeight || 1.5};
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  transition: .2s ease-in-out;
  transform: translate(.6rem, 2rem);
`)

export default Label