import React from "react";
import styled from "styled-components";
import feed from '../Assets/feed-icon.svg'
import hash from '../Assets/png-transparent-number-sign-hashtag-symbol-others-purple-cross-sign-thumbnail.png';
import right from '../Assets/right-icon.svg';
import bannerimg from '../Assets/li_evergreen_jobs_ad_300x250_v1.jpg';
const RightSide = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>

          <h2>
            Add to your feed
          </h2>
          <img src={feed} alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar/>
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
          
          <a>
            <Avatar/>

          </a>
          <div>
            <span>
              #Video
              </span>
              <button>Follow</button>
          
          </div>
          </li>
        </FeedList>
        <Recommendation>
          View All Recommendations
     
        <img src={right} alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img src={bannerimg} alt="" />
      </BannerCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;

position: relative;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
padding: 12px;
`;
const Title = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
font-size: 1rem;
width: 100%;
color: rgba(0,0,0,0.5);
`;

const FeedList = styled.ul`
margin-top: 1rem;
li{
  display: flex;
  align-items: center;
  margin: 12px 0;
  position: relative;
  font-size: 0.9rem;
  & > div{
    display: flex;
    flex-direction: column;

  }
  button{
    background-color: transparent;
    color: rgba(0,0,0,0.6);
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
    padding: 16px;
    border-radius: 16px;
    font-weight:600;
    display: inline-flex;
    justify-content: center;
    max-height: 2rem;
    max-width: 480px;
    align-items: center;
    outline: none;
  }
}
`;
const Avatar = styled.div`
background-image: url(${hash});
background-size: contain;
background-position:center;
background-repeat: no-repeat;
width: 48px;
height: 48px;
margin-right: 0.5rem;
`;


const Recommendation = styled.a`
color: #0a66c2;
display: flex;
align-items: center;
font-size: 0.9rem;
`;
const BannerCard = styled(FollowCard)`
height: 100%;
width:100%;

`;
export default RightSide;
