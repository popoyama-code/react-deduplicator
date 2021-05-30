import React from 'react'
import styled from 'styled-components'

const Box = ({children, ...props}) => {
  return (
    <StyledBox {...props}>
      {children}
    </StyledBox>
  )
}

const StyledBox = styled.div(props => `
  background: ${props.background || "transparent"};
  border: none;
  border-radius: ${props.borderRadius || 0};
  box-shadow: ${props.boxShadow || "none"};
  display: inline-block;
  height: ${props.styleHeight || "auto"};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
  width: ${props.styleWidth || "auto"};
}`)

export default Box