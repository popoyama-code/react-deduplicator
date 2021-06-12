import React, {useContext} from 'react'
import styled from 'styled-components'
import TextArea from '../../atoms/textarea'
import Label from '../../atoms/label'
import properties from '../../_settings/_properties'
import constants from '../../../helper/constants'
import  {AppContext} from '../../../pages/appPage'

export default React.forwardRef((props, ref) => {
  const {source} = useContext(AppContext)
  return (
    <StyledSourceTextarea {...props}>
      <TextArea id="source-textarea" {...props} placeholder=" " maxLength={constants.LENGTH.SOURCE} styleHeight="300px" ref={source}  />
      <Label htmlFor="source-textarea"><StyledRequiredMark>*</StyledRequiredMark>重複削除するテキスト</Label>
    </StyledSourceTextarea>
  )
})

const StyledSourceTextarea = styled.div(props => `
  line-height: 1;
  padding-top: 1.5rem;
  position: relative;
  textarea:focus + label, textarea:not(:placeholder-shown) + label {
    color: ${properties.COLOR.BLACK};
    cursor: default;
    transform: translate(0, 0);
  }
`)

const StyledRequiredMark = styled.span(props => `
  color: ${properties.THEME_COLOR.ACCENT};
`)
