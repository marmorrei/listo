import { FC, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Header } from './components/molecules'

type TStyledMain = {
  isFrontPage: boolean
}

const StyledMain = styled('main').withConfig({
  shouldForwardProp: (prop) => !['isFrontPage'].includes(prop),
})<TStyledMain>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isFrontPage }) =>
    isFrontPage ? 'center' : 'flex-start'};
  gap: 1.5rem;
  width: 100%;
  height: 100vh;
`

export const App: FC = () => {
  // REMOVE RULES DISABLED WHEN USED THE setToDos
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [toDos, setToDos] = useState<[]>([]) // ADD ARRAY OF TODOS + type WHEN READY
  const [isFrontPage, setIsFrontPage] = useState<boolean>(true)

  useEffect(() => {
    if (toDos.length === 0) {
      setIsFrontPage(true)
    } else {
      setIsFrontPage(false)
    }
  }, [toDos])

  return (
    <StyledMain isFrontPage={isFrontPage}>
      <Header isFrontPage={isFrontPage} />
    </StyledMain>
  )
}
