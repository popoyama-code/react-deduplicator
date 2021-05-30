import React from 'react'
import styled from 'styled-components'
import properties from '../../_settings/_properties'

const NeumorphismBox = ({children, ...props}) => {
  return (
    <StyledNeumorphismBox {...props}>
      {children}
    </StyledNeumorphismBox>
  )
}

const StyledNeumorphismBox = styled.div(props => `
  background: ${props.background || properties.THEME_COLOR.BASE};
  border: none;
  border-radius: 3rem;
  box-shadow:  24px 24px 48px #cecece,
               -24px -24px 48px #ffffff;
  display: inline-block;
  height: ${props.styleHeight || "auto"};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
  width: ${props.styleWidtht || "auto"};
}`)

export default NeumorphismBox