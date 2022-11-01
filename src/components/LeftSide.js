import React from "react";
import styled from "styled-components";
import Photo1 from "../Assets/photo.svg";
import User from "../Assets/card-bg.svg";
import widg from "../Assets/widget-icon.svg";
import itemsvg from "../Assets/item-icon.svg";
import plus from "../Assets/plus-icon.svg";
const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground>
            <Top>
              <Icon src={Photo1} alt="" />
            </Top>
            <div
              className="bottom"
              style={{
                flexBasis: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Welcome,there!{" "}
              <span
                style={{
                  display: "block",
                  color: "#0a66c2",
                  marginTop: "4px",
                  fontSize: "12px",
                  lineHeight: "1.33",
                  fontWeight: "400",
                }}
              >
                Add a photo
              </span>
            </div>
          </CardBackground>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your Network</span>
            </div>
            <img src={widg} alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src={itemsvg} alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src={plus} alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 4px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground = styled.div`
  /* background: teal; */
  height: 11rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;
const Top = styled.div`
  position: relative;
  flex-basis: 30%;
  /* background:teal; */
  background-image: url(${User});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;
const Icon = styled.img`
  width: 2rem;
  aspect-ratio: 1;
  position: absolute;
  bottom: -1.6rem;
  left: 50%;
  translate: -50%;
  background: white;
  padding: 1rem;
  border-radius: 50%;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url(${Photo1});
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: cneter;
  background-size: 100%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;
const Link = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const AddPhotoText = styled.div``;

const Widget = styled.div`
  border-bottom: 1px solid black;
  padding-top: 12px;
  padding-bottom: 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    svg {
      color: rgba(0, 0, 0, 1);
    }
  }
`;
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const CommunityCard = styled(ArtCard)`
padding: 8px 0 0 ;
display:flex;
text-align: left;
font: bold;
flex-direction: column;
a{
  color:black;
  padding: 4px 12px 4px 12px;
  font-size: 12px;

  &:hover{
    color: #0a66c2;

  }

  span{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  &:last-child{
    color: rgba(0,0,0,0.5);
    text-decoration: none;
    border-top: 1px solid rgba(0,0,0,0.5);
    padding: 12px;
    &:hover{
      background-color: rgba(0,0,0,0.08);
    }

  }
}

`;
export default LeftSide;
