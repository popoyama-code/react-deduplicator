import React from 'react'
import styled from 'styled-components'
import NeumorphismButton from '../../atoms/neumorphismButton'
import Image from '../../atoms/image'
import Tooltip from '../../atoms/tooltip'

import SaveIcon from '../../../images/save.svg'

const SaveButton = (props) => {
  return (
    <StyledSaveButton>
      <NeumorphismButton {...props}><Image src={SaveIcon} styleHeight="2rem" styleWidth="2rem" /></NeumorphismButton>
      <StyledTooltipContainer className="tooltip-container"><Tooltip>結果を保存する</Tooltip></StyledTooltipContainer>
    </StyledSaveButton>
  )
}

const StyledTooltipContainer = styled.div(props => `
  display: none;
  top: 130%;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
`)

const StyledSaveButton = styled.div(props => `
  position: relative;
  :hover {
    .tooltip-container {
      display: block;
    }
  }
`)

export default SaveButton