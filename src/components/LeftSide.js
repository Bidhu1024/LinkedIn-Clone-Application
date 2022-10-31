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
background-image: `url(${Photo1})` ;
background-position:center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;
`;
const Photo = styled.div``
const Link = styled.div``
const AddPhotoText = styled.div``

export default LeftSide