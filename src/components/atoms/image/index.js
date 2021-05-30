import React from 'react'
import styled from 'styled-components'

const Image = props => {
  return (
    <StyledImage {...props} />
  )
}

const StyledImage = styled.img(props => `
  display: ${props.display || "inline-block"};
  height: ${props.styleHeight || "auto"};
  width: ${props.styleWidth || "100%"};
}`)

export default Image