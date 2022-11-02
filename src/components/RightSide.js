import React from "react";
import styled from "styled-components";
import feed from '../Assets/feed-icon.svg'
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
          <a>
            <Avatar/>

          </a>
          <div>
            <span>
              #Video
              <button>Follow</button>
            </span>
          </div>
        </FeedList>
      </FollowCard>
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

const FeedList = styled.ul``;
const Avatar = styled.div`

`;
export default RightSide;
