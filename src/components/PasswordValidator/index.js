import {useState} from 'react'
import {
  MainContainer,
  Container,
  Input,
  Heading,
  Para,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPasswrod] = useState('')
  const [isWrong, setterIsWrong] = useState(true)

  const changePassword = event => {
    const name = event.target.value
    if (name.length >= 8) {
      setPasswrod(name)
      setterIsWrong(false)
    } else {
      setPasswrod(name)
      setterIsWrong(true)
    }
  }

  return (
    <MainContainer>
      <Container>
        <Heading>Password Validator</Heading>
        <p>check how strong and secure is your password</p>
        <Input type="password" value={password} onChange={changePassword} />
        {isWrong && <Para>Your password must be at least 8 characters</Para>}
      </Container>
    </MainContainer>
  )
}

export default PasswordValidator
