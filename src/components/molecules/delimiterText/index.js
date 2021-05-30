import React, {useContext,useMemo} from 'react'
import styled from 'styled-components'
import InputText from '../../atoms/inputText'
import Label from '../../atoms/label'
import {AppContext} from '../../../pages/appPage'
import properties from '../../_settings/_properties'

const DelimiterText = props => {
  const {delimiter} = useContext(AppContext)
  return useMemo(() => {
    return (
      <StyledDelimiterText>
        <InputText id="delimiter-input" placeholder=" " ref={delimiter} />
        <Label htmlFor="delimiter-input">区切り文字(未入力時は改行)</Label>
      </StyledDelimiterText>
    )
  }, [delimiter])
}

const StyledDelimiterText = styled.div(props => `
  padding-top: 1.5rem;
  position: relative;
  input:focus + label, input:not(:placeholder-shown) + label {
    color: ${properties.COLOR.BLACK};
    cursor: default;
    transform: translate(0, 0);
  }
`)

export default DelimiterText