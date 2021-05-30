import React from 'react'
import styled from 'styled-components'  
import properties from '../../_settings/_properties'

const Section = ({children, ...props}) => {
  return (
    <StyledSection {...props}>
      {children}
    </StyledSection>
  )
}

const StyledSection = styled.section(props => `
  color: ${props.fontColor || "#333"};
  font-size: ${props.fontSize || properties.FONT.SIZE_S};
  margin: ${props.margin || 0};
  padding: ${props.padding || 0};
}`)

export default Section