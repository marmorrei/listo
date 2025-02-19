import { styled } from 'styled-components'

const Main = styled.main`
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`

export const App = () => {
  return (
    <Main>
      <img src="/tick.svg" alt="done" height={50} />
      <h1>¡Listo!</h1>
    </Main>
  )
}
