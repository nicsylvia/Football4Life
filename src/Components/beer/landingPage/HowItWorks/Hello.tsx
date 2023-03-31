import React from "react";
import styled from "styled-components";
import pic1 from "../../Assets/new.png";

import pic2 from "../../Assets/hello2.png";
import pic3 from "../../Assets/hello3.png";

import pic4 from "../../Assets/hello3.png";

const Hello = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Top>
            <h1>Connect with the lastest football predicting app.</h1>
          </Top>
          <P>
            <p>
              We give analysis of the Premier League, which include news,
              scores, analysis of the top teams and perfect odds.
            </p>
          </P>
          <Payment>
            <Img2 src={pic3} />
            <Second>
              <Up>
                <h3>Monitor your winning status </h3>
              </Up>
              <p>
                We automatically give live scores and winning board to the
                prediction made on a football match
              </p>
            </Second>
          </Payment>

          <Payment>
            <Img2 src={pic2} />
            <Second>
              <Up>
                <h3>We connect to large range of users across the Globe</h3>
              </Up>
              <p>Predictions can be made any time and anywhere.</p>
            </Second>
          </Payment>

          <Payment>
            <Img2 src={pic4} />
            <Second>
              <Up>
                <h3>Get Awesome Prizes</h3>
              </Up>
              <p>
                Predictions are made with Goods Odds for you to enjoy at your
                beak.
              </p>
            </Second>
          </Payment>
        </Left>
        <Right>
          <Img src={pic1} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hello;
const Right = styled.div`
  width: 48%;
  display: flex;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 35px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 35px;
  }
`;
const Up = styled.div`
  h3 {
    color: #00214f;
    font-weight: 700;
    margin: 0;
  }
`;
const Second = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  p {
    margin: 0;
    line-height: 25px;
    margin-top: 5px;
    font-size: 15px;
  }
`;
const Img2 = styled.img`
  @media screen and (max-width: 320px) {
    height: 50px;
  }
  @media screen and (max-width: 500px) {
    height: 50px;
  }
`;
const Payment = styled.div`
  display: flex;
  margin-top: 40px;
`;
const P = styled.div`
  p {
    margin: 0;
    line-height: 25px;
  }
`;
const Top = styled.div`
  h1 {
    color: #00214f;
    /* text-align: center; */
    @media screen and (max-width: 425px) {
      font-size: 26px;
    }
    @media screen and (max-width: 768px) {
      font-size: 26px;
      text-align: center;
    }
    @media screen and (max-width: 375px) {
      font-size: 22px;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media screen and (max-width: 1024px) {
    height: 430px;
  }
  @media screen and (max-width: 768px) {
    height: 390px;
  }
  @media screen and (max-width: 425px) {
    height: 400px;
  }
  @media screen and (max-width: 320px) {
    height: 350px;
  }
`;
const Left = styled.div`
  width: 48%;
  display: flex;

  flex-direction: column;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;
