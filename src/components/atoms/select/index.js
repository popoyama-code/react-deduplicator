import React from 'react'
import styled from 'styled-components'  

const Select = ({onChange, ...props}) => {
  const options = props.options.map((i) => <option key={i.idx} value={i.idx}>{i.val}</option>)
  return (
    <StyledSelect onChange={e=> onChange(e.target.value)} {...props}>{options}</StyledSelect>
  )
}

const StyledSelect = styled.select(props => `

`)

export default Select