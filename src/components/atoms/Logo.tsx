import { FC } from 'react'
import { styled } from 'styled-components'

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`

const Icon = styled.img`
  height: 3rem;
`

const StyledTitle = styled.h1`
  margin: 0;
  letter-spacing: 0.3rem;
  font-size: 4rem;
  font-weight: 400;
  -webkit-text-stroke: 2px #2e2e2e;
`

type TSpan = {
  color: string
}

const StyledSpan = styled('span').withConfig({
  shouldForwardProp: (prop) => !['color'].includes(prop),
})<TSpan>`
  text-shadow: 0 0 1rem ${(props) => props.color};
  color: ${(props) => props.color};
`
export const Logo: FC = () => {
  return (
    <StyledLogo>
      <Icon src="tick.svg" alt="done" />
      <StyledTitle>
        <StyledSpan color="#f16363">L</StyledSpan>
        <StyledSpan color="#8f93ff">i</StyledSpan>
        <StyledSpan color="#a6a6a6">s</StyledSpan>
        <StyledSpan color="#ffcf4d">t</StyledSpan>
        <StyledSpan color="#72b5fd">o</StyledSpan>
      </StyledTitle>
    </StyledLogo>
  )
}
