import React, {useState, useCallback} from 'react'
import styled from 'styled-components'  
import properties from '../../_settings/_properties'

const NeumorphismButton = React.memo(({children, onClick, ...props}) => {
  const [clicked, setClicked] = useState(false)
  const onClickInternal = useCallback((e) => {
    if (onClick) onClick(e)
    setClicked(true)
  }, [onClick])
  return (
    <StyledNeumorphismButton onClick={(e) => onClickInternal(e)} clicked={clicked} {...props} onAnimationEnd={() => setClicked(false)}>{children}</StyledNeumorphismButton>
  )
})

const StyledNeumorphismButton = styled.button(props => `
  background-color: ${props.bgColor || properties.THEME_COLOR.BASE};
  border: none;
  border-radius:${props.borderRadius || ".25rem"};
  box-shadow: -7px -7px 20px 0px #fff,
              -4px -4px 5px 0px #fff,
              5px 5px 10px 0px #cecece,
              4px 4px 5px 0px #cecece;
  color: ${props.fontColor || properties.COLOR.WHITE};
  cursor: pointer;
  font-size: ${props.fontSize || properties.FONT.SIZE_S};
  line-height: 1;
  outline: none;
  padding: ${props.buttonSize || properties.BUTTON.SIZE_S};
  position: relative;
  transition: ${props.transition || ".2s ease"};
  &:active {
    box-shadow: none;
    transform: translateY(3px);
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

export default NeumorphismButton