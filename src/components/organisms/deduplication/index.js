import React from 'react'
import styled from 'styled-components'

import Section from '../../atoms/section'
import SourceTextarea from '../../molecules/sourceTextarea'
import OutputTextarea from '../../molecules/outputTextarea'
import DelimiterText from '../../molecules/delimiterText'
import LoadButton from '../../molecules/loadButton'
import DeduplicateButton from '../../molecules/deduplicateButton'
import SaveButton from '../../molecules/saveButton'
import CopyButton from '../../molecules/copyButton'
import SortDropdown from '../../molecules/sortDropdown'
import StretchyBox from '../../molecules/stretchyBox'
import AppHeading from '../../molecules/appHeading'
import FlexBlock from '../../atoms/flexBlock'
import Block from '../../atoms/block'

const Deduplication = React.memo((props) => {
  return (
    <StyledDeduplication>
      <StretchyBox isOpened={Boolean(props.isOpened)} borderRadius=".5rem" styleHeight="640px" styleWidth="360px" >
        <Section padding="1rem">
          <FlexBlock styleHeight="5rem">
            <AppHeading>まとめるさん</AppHeading>
          </FlexBlock>
          <form onSubmit={props.onSubmit} id="source-form">
            <SourceTextarea />
            <Block margin="1rem 0 0">
              <DelimiterText />
            </Block>
          </form>
          <StyledButtonBlock>
            <LoadButton onClick={props.onClickLoad} onChange={props.onChangeLoad} />
            <DeduplicateButton type="submit" form="source-form" />
          </StyledButtonBlock>
        </Section>
        <Section padding="6rem 1rem 1rem">
          <OutputTextarea value={props.output} />
          <Block margin="1rem 0 0">
            <SortDropdown onChange={props.onChangeSelect} />
          </Block>
          <StyledButtonBlock>
            <SaveButton onClick={props.onClickSave} />
            <CopyButton onClick={props.onClickCopy} />
          </StyledButtonBlock>
        </Section>
      </StretchyBox>
      <StyledCopyright>©p-p.dev 2025</StyledCopyright>
    </StyledDeduplication>
  )
})

const StyledDeduplication = styled.div(props => `
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`)

const StyledButtonBlock = styled.div(props => `
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 1rem 0;
  button:nth-of-type(n+2) {
    margin-left .5rem;
  }
`)

const StyledCopyright = styled.small(props => `
  bottom: 0;right: 0;
  color: rgba(0, 0, 0, .3);
  font-size: 1rem;
  position: fixed;
`)

export default Deduplication
