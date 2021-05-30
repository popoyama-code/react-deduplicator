import React, {useState, useCallback} from 'react'
import styled from 'styled-components'  
import properties from '../../_settings/_properties'

const Button = React.memo(({children, onClick, ...props}) => {
  const [clicked, setClicked] = useState(false)
  const onClickInternal = useCallback((e) => {
    if (onClick) onClick(e)
    setClicked(true)
  }, [onClick])
  return (
    <StyledButton onClick={(e) => onClickInternal(e)} clicked={clicked} {...props} onAnimationEnd={() => setClicked(false)}>{children}</StyledButton>
  )
})

const StyledButton = styled.button(props => `
  background-color: ${props.bgColor || properties.THEME_COLOR.MAIN};
  border: none;
  border-radius:${props.borderRadius || ".25rem"};
  color: ${props.fontColor || properties.COLOR.WHITE};
  cursor: pointer;
  font-size: ${props.fontSize || properties.FONT.SIZE_S};
  outline: none;
  padding: ${props.buttonSize || properties.BUTTON.SIZE_S};
  position: relative;
  transition: ${props.transition || ".2s ease"};
  :hover {
    background-color: ${props.bgColorHover || properties.COLOR.TEAL_DARK};
  }
  :after {
    background-color: ${props.bgColorAnim || properties.COLOR.TEAL_LIGHT};
    border-radius:${props.borderRadius || ".25rem"};
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 100%;
    ${props.clicked ? "animation: show .5s 1;" : null};
    @keyframes show {
      0% {
        visibility: visible;
      }
      100% {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }
  }
`)

export default Button