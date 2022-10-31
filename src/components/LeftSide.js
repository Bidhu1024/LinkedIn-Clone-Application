import React from 'react'
import styled from 'styled-components';
import Photo1 from '../Assets/photo.svg';
import User from '../Assets/user.svg'
const LeftSide = (props) => {
  return (
<Container>
<ArtCard>
  <UserInfo>
    <CardBackground>
      <a>
        <Photo>

        </Photo>
        <Link>
          Welcome
        </Link>
      </a>
      <a>
        <AddPhotoText>Add a Photo</AddPhotoText>
      </a>
    </CardBackground>
  </UserInfo>
</ArtCard>

</Container>
  )
}
const Container = styled.div`
grid-area:leftside;
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
border-bottom: 1px solid rgba( 0,0,0,0.6);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;

`;
const CardBackground = styled.div`
background: url("../Assets/card-bg.svg");
background-position:center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;
`;
const Photo = styled.div`
box-shadow: none;
background-image: url("../Assets/photo.svg");
width:72px;
height: 72px;
box-sizing: border-box;
background-clip: content-box;
background-color: red;
background-position:cneter;
background-size: 60%;
background-repeat: no-repeat;
border: 2px solid white;
margin: -38px auto 12px;
border-radius: 50%;


`;
const Link = styled.div`
font-size: 1rem;
line-height: 1.5;
color: rgba(0,0,0,0.9);
font-weight: 600;

`
const AddPhotoText = styled.div``

export default LeftSide