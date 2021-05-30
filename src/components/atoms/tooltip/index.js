import React from 'react'
import styled from 'styled-components'

const Tooltip = ({children}) => {
  return (
    <StyledTooltip>
      {children}
    </StyledTooltip>
  )
}

const StyledTooltip = styled.div(props => `
  background-color: #333;
  border: none;
  border-radius:.25rem;
  color: #fff;
  display: inline-block;
  padding: .5rem 1rem;
  position: relative;
  white-space: nowrap;
  :after {
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    bottom: 100%;
    content: "";
    left: 50%;
    margin-left: -5px;
    position: absolute;
  }
}`)

export default Tooltip