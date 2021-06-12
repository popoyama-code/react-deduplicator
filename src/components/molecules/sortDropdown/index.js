import React from 'react'
import styled from 'styled-components'
import constants from '../../../helper/constants'
import Text from '../../atoms/text'
import Dropdown from '../../atoms/dropdown'

const SortDropdown =  React.memo(({onChange, ...props}) => {
  return (
    <StyledSortDropdown {...props}>
      <Text>並び順</Text>
      <Dropdown options={constants.OPTION.ORDER} onChange={val => onChange(val)} />
    </StyledSortDropdown>
  )
})

const StyledSortDropdown = styled.div(props => `

`)

export default SortDropdown