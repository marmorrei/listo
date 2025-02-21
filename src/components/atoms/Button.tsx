import { ButtonHTMLAttributes, FC } from 'react'
import { styled } from 'styled-components'

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: 'add' | 'delete' | 'edit' | 'save' | 'cancel'
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 2px 2px 10px 0px rgba(166, 166, 166, 0.75);
  -webkit-box-shadow: 2px 2px 10px 0px rgba(166, 166, 166, 0.75);
  -moz-box-shadow: 2px 2px 10px 0px rgba(166, 166, 166, 0.75);
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(229, 229, 229, 0.7);
  }

  @media (min-width: 1280px) {
    display: none;
  }
`
const StyledIcon = styled.img`
  height: 2rem;
`

const ResponsiveStyledButton = styled(StyledButton)`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    gap: 0.5rem;
    font-family: 'Patrick Hand', serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem;
  }
`

export const Button: FC<TButton> = ({
  type = 'submit',
  name = 'add',
  ...rest
}) => {
  return (
    (name === 'add' && (
      <>
        <StyledButton type={type} name={name} {...rest}>
          <StyledIcon src="add.svg" alt="add-item" />
        </StyledButton>
        <ResponsiveStyledButton type={type} name={name} {...rest}>
          Añadir <StyledIcon src="add.svg" alt="add-item" />
        </ResponsiveStyledButton>
      </>
    )) ||
    (name === 'delete' && (
      <>
        <StyledButton type={type} name={name} {...rest}>
          <StyledIcon src="delete.svg" alt="delete" />
        </StyledButton>
        <ResponsiveStyledButton type={type} name={name} {...rest}>
          Eliminar <StyledIcon src="delete.svg" alt="delete" />
        </ResponsiveStyledButton>
      </>
    )) ||
    (name === 'edit' && (
      <>
        <StyledButton type={type} name={name} {...rest}>
          <StyledIcon src="edit.svg" alt="edit" />
        </StyledButton>
        <ResponsiveStyledButton type={type} name={name} {...rest}>
          Editar <StyledIcon src="edit.svg" alt="edit" />
        </ResponsiveStyledButton>
      </>
    )) ||
    (name === 'save' && (
      <>
        <StyledButton type={type} name={name} {...rest}>
          <StyledIcon src="save.svg" alt="save" />
        </StyledButton>
        <ResponsiveStyledButton type={type} name={name} {...rest}>
          Guardar <StyledIcon src="save.svg" alt="save" />
        </ResponsiveStyledButton>
      </>
    )) || (
      <>
        <StyledButton type={type} name={name} {...rest}>
          <StyledIcon src="close-cancel.svg" alt="close-cancel" />
        </StyledButton>
        <ResponsiveStyledButton type={type} name={name} {...rest}>
          Cancelar <StyledIcon src="close-cancel.svg" alt="close-cancel" />
        </ResponsiveStyledButton>
      </>
    )
  )
}
