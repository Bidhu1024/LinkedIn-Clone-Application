import React from "react";
import styled from "styled-components";
import homelogo from "../Assets/home-logo.svg";
import SearchLogo from "../Assets/search-icon.svg";
import NavHome from "../Assets/nav-home.svg";
import NavJob from "../Assets/nav-jobs.svg";
import NavMess from "../Assets/nav-messaging.svg";
import NavNet from "../Assets/nav-network.svg";
import NavNotifi from "../Assets/nav-notifications.svg";
import user from "../Assets/user.svg";
import drop from "../Assets/down-icon.svg";
import NavWork from "../Assets/nav-work.svg";
const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src={homelogo} alt="homelogo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={SearchLogo} alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src={NavHome} alt="NavHome" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={NavNet} alt="NavHome" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={NavMess} alt="NavHome" />
                <span>Messages</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={NavJob} alt="NavHome" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={NavNotifi} alt="NavHome" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src={user} alt="" width="24px" height="24px"/>
                <span>Me</span>
                <img src={drop} alt="" />
              </a>
              <SignOut>
                <a>
                  Sign out
                </a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src={NavWork} alt="" />
                <span>
                  Work
                  <img src={drop} alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0px 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 4px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid black;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: tramsform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.6);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);

      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
      }
    }
  }
`;
const SignOut = styled.div`
position:absolute;
top: 45px;
background: white;
border-radius:0 0 5px 5px;
width: 100px;
height:40px;
font-size:1rem;
transition-duration:167ms;
text-align: center;
display: none;
`;

const User = styled(NavList)`
  a > img{
      border-radius:50%;
    }
  

  span{
    display: flex;
    align-items:center;
  }

  &:hover{
    ${SignOut}{
      align-items: center;
      display: flex;
      justify-content: center;

    }
  }
`;
const Work = styled(User)`
  
 border-left: 1px solid rgba(0,0,0,0.3);
`;


export default Header;
