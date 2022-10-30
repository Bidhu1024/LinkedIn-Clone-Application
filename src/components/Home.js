import React from "react";
import styled from "styled-components";
import App from "./../App";
const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry?</a>
        </h5>
        <p>Find talented pros in record time Upwork and keep business moving</p>
      </Section>
      <Layout>
        <div>left</div>
        <div>middle</div>
        <div>right</div>
      </Layout>
    </Container>
  );
};


const Container = styled.div`
padding-top: 82px;
max-width:100%;

`

const Content = styled.div`
max-width: 1128px;
margin-left: auto;
margin-right: auto;

`

const Section = styled.section`
min-height: 50px;
padding:1rem;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;

h5{
  color: #0a66c2;
  font-size: 0.9rem;
  a{
    font-weight: 700;
  }
}
p{
font-size:0.9rem;
color:#434649;
font-weight: 600;

}
@media (max-width:768px){
  flex-direction: column;
  padding: 0 5px;
}
`;
const Layout = styled.div`
display: grid;
grid-template-areas: "leftside main rightside";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr, minmax(300px,7fr));
column-gap: 25px;
row-gap: 25px;
grid-template-rows: auto;
margin: 25px 0;
@media (max-width:768px){
display: flex;
flex-direction: column;
padding: 0 5px;

}
`;
export default Home;
