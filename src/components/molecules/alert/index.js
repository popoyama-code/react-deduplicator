import React from 'react'
import styled from 'styled-components'
import Box from '../../atoms/box'
import Text from '../../atoms/text'
import constants from '../../_settings/_constants'
import properties from '../../_settings/_properties'
// notification
const Alert = React.memo(({children}) => {
  const isVisible = Boolean(children)
  return (
    <StyledAlert isVisible={isVisible}>
      <Box background={properties.COLOR.BLACK} borderRadius=".5rem">
        <Text fontColor={properties.COLOR.WHITE} padding=".5rem 1rem">{children}</Text>
      </Box>
    </StyledAlert>
  )
})

const StyledAlert = styled.div(props => `
  cursor: default;
  display: ${props.isVisible ? "block" : "none"};
  position: fixed;
  top: 80%;
  transform: translateX(-50%);
  left: 50%;
  transition: .5s ease-in-out;
  z-index: ${constants.Z_INDEX.ALERT};
`)

export default Alert