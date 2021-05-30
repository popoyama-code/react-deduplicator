import React from 'react'
import styled from 'styled-components'
import NeumorphismButton from '../../atoms/neumorphismButton'
import Image from '../../atoms/image'
import Tooltip from '../../atoms/tooltip'

import CopyIcon from '../../../images/copy.svg'

const CopyButton = (props) => {
  return (
    <StyledCopyButton>
      <NeumorphismButton {...props}><Image src={CopyIcon} styleHeight="2rem" styleWidth="2rem" /></NeumorphismButton>
      <StyledTooltipContainer className="tooltip-container"><Tooltip>クリップボードにコピーする</Tooltip></StyledTooltipContainer>
    </StyledCopyButton>
  )
}

const StyledTooltipContainer = styled.div(props => `
  display: none;
  top: 130%;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
`)

const StyledCopyButton = styled.div(props => `
  position: relative;
  :hover {
    .tooltip-container {
      display: block;
    }
  }
`)

export default CopyButton