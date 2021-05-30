import React from 'react'
import styled from 'styled-components'  

const DoubleSidedCard = ({children, side, ...props}) => {
  let animName0 = "show"
  let animName1 = "hide"
  let animDuration = "0"
  if (side === "back") {
    animName0 = "hide"
    animName1 = "show"
    animDuration = ".5"
  } else if (side === "front") {
    animDuration = ".5"
  }
  return (
    <StyledDoubleSidedCard {...props}>
      <StyledDoubleSidedCardInner animName={animName0} animDuration={animDuration} background="red" {...props}>
        {children[0]}
      </StyledDoubleSidedCardInner>
      <StyledDoubleSidedCardInner animName={animName1} animDuration={animDuration} background="blue" {...props}>
        {children[1]}
      </StyledDoubleSidedCardInner>
    </StyledDoubleSidedCard>
  )
}

const StyledDoubleSidedCardInner = styled.div(props => `
  animation: ${props.animDuration}s linear 0s 1 normal forwards running ${props.animName};
  backface-visibility: hidden;
  background: ${props.background};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @keyframes show {
    0% {
      transform: rotateY(-180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
  @keyframes hide {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
`)

const StyledDoubleSidedCard = styled.div(props => `
  height: ${props.height};
  margin: ${props.margin};
  padding: ${props.padding};
  perspective: 50rem;
  position: relative;
  width: ${props.width};
  }
`)

export default DoubleSidedCard