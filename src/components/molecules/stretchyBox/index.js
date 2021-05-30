import React from 'react'
import styled from 'styled-components'
import NeumorphismBox from '../../atoms/neumorphismBox'
import properties from '../../_settings/_properties'

const StretchyBox = ({children, isOpened, styleHeight, styleWidth, ...props}) => {
  return (
    <NeumorphismBox {...props}>
      <StyledContentsWrap styleWidth={styleWidth} styleHeight={styleHeight} isOpened={isOpened}>
        <StyledLeftContent styleWidth={styleWidth} isOpened={isOpened} {...props}>
          {children[0]}
        </StyledLeftContent>
        <StyledRightContent styleWidth={styleWidth} isOpened={isOpened} {...props}>
          {children[1]}
        </StyledRightContent>
      </StyledContentsWrap>
    </NeumorphismBox>
  )
}

const StyledLeftContent = styled.div(props => `
  display: inline-block;
  height: 100%;
  position: relative;
  width: ${props.styleWidth || "100%"};
  :after {
    content: "";
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 1px;
    background: ${properties.COLOR.GRAY};
    height: ${props.isOpened ? "95%": "0px"};
    position: absolute;
    transition: .5s ease-in-out;
    transition-delay: .25s;
  }
`)

const StyledRightContent = styled.div(props => `
  display: inline-block;
  height: 100%;
  opacity: ${props.isOpened ? 1 : 0};
  position: absolute;
  top: 0;
  transition: .5s ease-in-out;
  transition-delay: .5s;
  right: 0;
  visibility: ${props.isOpened ? "visible" : "hidden"};
  width: ${props.styleWidth};

`)

const StyledContentsWrap = styled.div(props => `
  display: inline-block;
  height: ${props.styleHeight};
  position: relative;
  transition: .5s ease-in-out;
  width: ${props.isOpened ? `calc(${props.styleWidth} * 2)` : props.styleWidth};
`)

export default StretchyBox