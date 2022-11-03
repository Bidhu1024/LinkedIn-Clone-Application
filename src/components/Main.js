import React from 'react'
import styled from 'styled-components';
import event from '../Assets/eventmainclr.png'
import article from '../Assets/articlemainclr.png'
import mainphoto from '../Assets/photomainclr.png'
import mainvideo from '../Assets/videomainclr.png'

import user from '../Assets/user.svg'

const Main = (props) => {
  return (
<Container>
<ShareBox>
  

<div>
  <img src={user} alt="" />
  <button>Start a Post</button>
  </div>
<div>
  <button>
    <img src={mainphoto} alt="" height="15px" width="15px"/>
    <span>Photo</span>
  </button>
  <button>
    <img src={mainvideo} alt="" height="15px" width="15px" />
    <span>Video</span>
  </button>
  <button>
    <img src={event} alt="" height="15px" width="15px"  />
    <span>Event</span>
  </button>
  <button>
    <img src={article} alt="" height="15px" width="15px" />
    <span>Article</span>
  </button>
</div>
</ShareBox>
</Container>
  )
}
const Container = styled.div`
grid-area:main;
`;
const CommonCard = styled.div`
text-align: center;
overflow:hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 / 20%);

`;

const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin:  0 0 8px;
background: white;
div{
  button{
    outline: none;
    color: rgba(0,0,0,0.6);
    line-height: 1.5;
    font-size: 14px;
    min-height: 3rem;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight:600;

  }
  &:first-child{
    display:flex;
    align-items: center;
    padding: 8px 16px 0 16px;

    img{
      width: 48px;
      border-radius: 50%;
      margin-right: 0.5rem;

    }
    button{
      margin: 4px 0;
      flex-grow: 1;
      border-radius: 35px;
      padding-left:1rem;
      border: 1px solid rgba(0,0,0,0.6);
      background-color: white;
      text-align: left;

    }
  }
  &:nth-child(2){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom:4px;

    button{
      img{
        margin: 0 4px -2px;
      }
      span{
        color: #70b5f9;
      }
    }
  }
}
`;
export default Main;