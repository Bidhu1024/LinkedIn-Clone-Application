import React from 'react'
import styled from 'styled-components'
import loginLogo from '../Assets/login-logo.svg'
 const Login = () => {
  return (
  <Container>
    <Nav>
        <a href="/">
            <img src={loginLogo} alt="linkedinlogo" />
        </a>
    </Nav>
  </Container>
  )
}
const Container = styled.div`
padding: 0;
`;
const Nav = styled.div`
max-width:1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;
& > a{
    width: 135px;
    height: 34px;
    @media (max-width:768px){
        padding:0 5px;
    }
}
`;

export default Login;