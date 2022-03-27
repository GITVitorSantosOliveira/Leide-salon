import {StyledButton} from './style'

const Button = (props,children) => {
  return(
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

export default Button;