import React from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/heading'
import properties from '../../_settings/_properties'

const AppHeading = React.memo(({children}) => {
  return (
    <StyledAppHeading>
      <Heading level={1} fontColor={properties.THEME_COLOR.MAIN} fontSize={properties.FONT.SIZE_M}>{children}</Heading>
    </StyledAppHeading>
  )
})

const StyledAppHeading = styled.div(props => `
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`)

export default AppHeading