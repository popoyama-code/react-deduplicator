import React, {useContext} from 'react'
import styled from 'styled-components'
import NeumorphismButton from '../../atoms/neumorphismButton'
import {AppContext} from '../../../pages/appPage'
import Image from '../../atoms/image'
import Tooltip from '../../atoms/tooltip'

import LoadIcon from '../../../images/load.svg'

export default React.forwardRef((props, ref) => {
  const {fileInput} = useContext(AppContext)
  return (
    <StyledLoadButton>
      <StyledLoadForm>
        <input
          type="file"
          accept="text/plain"
          ref={fileInput}
          onChange={(e) => {
            e.preventDefault()
            props.onChange(e.currentTarget.files[0])
          }}
        />
      </StyledLoadForm>
      <NeumorphismButton onClick={props.onClick}><Image src={LoadIcon} styleHeight="2rem" styleWidth="2rem" /></NeumorphismButton>
      <StyledTooltipContainer className="tooltip-container"><Tooltip>ファイルを読み込む</Tooltip></StyledTooltipContainer>
    </StyledLoadButton>
  )
})

const StyledLoadForm = styled.form(props => `
  display: none;
`)

const StyledTooltipContainer = styled.div(props => `
  display: none;
  top: 130%;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
`)

const StyledLoadButton = styled.div(props => `
  position: relative;
  :hover {
    .tooltip-container {
      display: block;
    }
  }
`)