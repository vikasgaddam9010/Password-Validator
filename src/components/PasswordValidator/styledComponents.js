import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  color: #ffffff;
  @media(max-width: 576px){
    min-width: 550px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #383a4e;
  border-radius: 15px;
  @media(max-width: 576px){
    min-width: 500px;
  }
`
export const Input = styled.input`
  background-color: #edeeff;
  boder-radius: 5px;
  margin-top: 30px;
`
export const Heading = styled.h1`
font-family: "Roboto";
`
export const Para = styled.p`
  color: #ef4444;
`
