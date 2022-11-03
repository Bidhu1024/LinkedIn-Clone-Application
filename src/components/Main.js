import React from "react";
import styled from "styled-components";
import event from "../Assets/eventmainclr.png";
import article from "../Assets/articlemainclr.png";
import mainphoto from "../Assets/photomainclr.png";
import mainvideo from "../Assets/videomainclr.png";
import elipsis from "../Assets/elipsis.png";
import user from "../Assets/user.svg";
import pubg from "../Assets/pubg.jpeg";
import like from "../Assets/like.png";
import clap from "../Assets/clap.png";
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
            <img src={mainphoto} alt="" height="15px" width="15px" />
            <span>Photo</span>
          </button>
          <button>
            <img src={mainvideo} alt="" height="15px" width="15px" />
            <span>Video</span>
          </button>
          <button>
            <img src={event} alt="" height="15px" width="15px" />
            <span>Event</span>
          </button>
          <button>
            <img src={article} alt="" height="15px" width="15px" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src={user} alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date </span>
              </div>
            </a>
            <button>
              <img src={elipsis} alt="" height="25px" width="20px" />
            </button>
          </SharedActor>
          <Description>
            Description
          </Description>
          <SharedImage>
            <a>
              <img src={pubg} alt="" />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img src={like} alt="" height = "5px" width="5px" />
                <img src={clap} alt="" height = "5px" width="5px" />
                <span>
                  35
                </span>
              </button>
            </li>
            <li>
              <a>
              4 comments
                </a>
            </li>
          </SocialCounts>
        </Article>
      </div>
    </Container>
  );
};
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.5;
      font-size: 14px;
      min-height: 3rem;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.6);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
padding-right:40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;

display: flex;
a{
  margin-right: 12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;
  img{
    width: 48px;
    height:48px;

  }
  &>div{
    display: flex;
    flex-direction: column;
    flex-grow:1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
    span{
      text-align: left;
      &:first-child{
        font-size: 14px;
        font-weight: 700;
        color: black;
      }

      &:nth-child(n+1){
        font-size: 12px;
        color: grey;
      }

    }
  }
}

button{
  position: absolute;
  right: 12px;
  top: 0;
  background: transparent;
  border: none;
  outline: none;
}
`;

const Description = styled.div`
padding: 0 16px;
overflow: hidden;
color: rgba(0, 0, 0, 0.8);
font-size: 14px;
text-align: left;


`;
const SharedImage = styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img{
  object-fit: contain;
  width: 100%;
  height: 100%;

}
`;

const SocialCounts = styled.ul`

`;
export default Main;
