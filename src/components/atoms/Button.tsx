import { ButtonHTMLAttributes, FC } from 'react'
import { styled } from 'styled-components'

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: 'add' | 'delete' | 'edit' | 'save' | 'cancel'
  size?: 'big' | 'small'
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Patrick Hand', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
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
`
const StyledIcon = styled.img`
  height: 2rem;
`
const buttonText = {
  add: 'Añadir',
  delete: 'Eliminar',
  edit: 'Editar',
  save: 'Guardar',
  cancel: 'Cancelar',
}

export const Button: FC<TButton> = ({
  type = 'submit',
  name = 'add',
  size = 'small',
  ...rest
}) => {
  return (
    (size === 'small' && (
      <>
        <StyledButton type={type} name={name} {...rest}>
          <StyledIcon src={`${name}.svg`} alt={name} />
        </StyledButton>
      </>
    )) || (
      <StyledButton type={type} name={name} {...rest}>
        {buttonText[name]} <StyledIcon src={`${name}.svg`} alt={name} />
      </StyledButton>
    )
  )
}
