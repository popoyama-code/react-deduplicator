import React from 'react'
import styled from 'styled-components'
import TextArea from '../../atoms/textarea'
import Text from '../../atoms/text'

const OutputTextarea = React.memo(({value, ...props}) => {
  return (
    <StyledOutputTextarea {...props}>
      <Text>削除結果</Text>
      <TextArea readOnly value={value} styleHeight="300px" {...props}  />
    </StyledOutputTextarea>
  )
})

const StyledOutputTextarea = styled.div(props => `
  line-height: 1;
`)

export default OutputTextarea