import React from 'react'
import styled from 'styled-components'
import NeumorphismButton from '../../atoms/neumorphismButton'
import Image from '../../atoms/image'
import Tooltip from '../../atoms/tooltip'

import EraserIcon from '../../../images/eraser.svg'

const DeduplicateButton = (props) => {
  return (
    <StyledDeduplicateButton>
      <NeumorphismButton {...props}><Image src={EraserIcon} styleHeight="2rem" styleWidth="2rem" /></NeumorphismButton>
      <StyledTooltipContainer className="tooltip-container"><Tooltip>重複を削除する</Tooltip></StyledTooltipContainer>
    </StyledDeduplicateButton>
  )
}

const StyledTooltipContainer = styled.div(props => `
  display: none;
  top: 130%;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
`)

const StyledDeduplicateButton = styled.div(props => `
  position: relative;
  :hover {
    .tooltip-container {
      display: block;
    }
  }
`)

export default DeduplicateButton