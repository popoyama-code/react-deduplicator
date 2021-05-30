import React from 'react'
import styled from 'styled-components'  

const Block = ({children, ...props}) => {
  return (
    <StyledBlock {...props}>
      {children}
    </StyledBlock>
  )
}

const StyledBlock = styled.div(props => `
  background: ${props.background || "transparent"};
  display: inline-block;
  height: ${props.styleHeight || "100%"};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
  width: ${props.styleWidth || "100%"};
}`)

export default Block