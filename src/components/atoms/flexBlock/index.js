import React from 'react'
import styled from 'styled-components'  

const FlexBlock = ({children, ...props}) => {
  return (
    <StyledFlexBlock {...props}>
      {children}
    </StyledFlexBlock>
  )
}

const StyledFlexBlock = styled.div(props => `
  align-items: ${props.alignItems || "strech"};
  background: ${props.background || "transparent"};
  display: flex;
  flex: ${props.flexProp || "0 1 auto"};
  flex-flow: ${props.flexFlow || "row nowrap"};
  height: ${props.styleHeight || "100%"};
  justify-content: ${props.justifyContent || "flex-start"};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
  width: ${props.styleWidth || "100%"};
}`)

export default FlexBlock