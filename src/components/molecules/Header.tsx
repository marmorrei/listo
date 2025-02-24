import { FC } from 'react'
import { styled } from 'styled-components'
import { Button, Logo } from '../atoms'

const StyledHeaderFrontPage = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 5rem;
  }
`
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export type THeader = {
  isFrontPage?: boolean
}

export const Header: FC<THeader> = ({ isFrontPage = false }) => {
  return isFrontPage ? (
    <StyledHeaderFrontPage>
      <Logo />
      <Button name={'add'} />
    </StyledHeaderFrontPage>
  ) : (
    <StyledHeader>
      <Logo />
      <Button name={'add'} />
    </StyledHeader>
  )
}
