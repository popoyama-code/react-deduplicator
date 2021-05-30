import React from 'react'
import styled from 'styled-components'
import properties from '../../_settings/_properties'

const Dropdown = ({onChange, ...props}) => {
  const options = props.options.map((i) => <option key={i.idx} value={i.idx}>{i.val}</option>)
  return (
    <StyledDropdown>
      <select onChange={e=> onChange(e.target.value)} {...props}>
        {options}
      </select>
    </StyledDropdown>
  )
}

const StyledDropdown = styled.div(props => `
  position: relative;
  display: block;
  margin: 0;
  border: 2px solid ${properties.COLOR.GRAY};
  border-radius: .25rem;
  background-color: ${properties.COLOR.WHITE};
  transition: ${props.transition || ".2s ease"};
  :focus-within {
    border: 2px solid ${properties.THEME_COLOR.MAIN};
    :after {
      color: ${properties.THEME_COLOR.MAIN};
    }
  }
  select {
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 0;
    cursor: pointer;
    display: block;
    font-size: 1rem;
    margin: 0;
    outline: none;
    padding: .5rem;
    width: 100%;
    color: ${properties.COLOR.BLACK};
    :focus {
      color: ${properties.COLOR.TEAL_DARK};
    }
  }
  :after {
    color: ${properties.COLOR.GRAY_DARK};
    content: '▼';
    font-size: 1rem;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    transition: ${props.transition || ".2s ease"};   
  }
`)

export default Dropdown