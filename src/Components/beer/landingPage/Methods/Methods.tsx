import React from "react";
import styled from "styled-components";
import pic1 from "../../Assets/footballer.jpg";

import pic2 from "../../Assets/young boys.jpeg";
import pic3 from "../../Assets/pitch.jpeg";
import { NavLink } from "react-router-dom";

const Methods = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>Create Account </h1>
        </Top>
        <Boxhold>
          <Card>
            <Img src={pic1} />
            <Down>
              <h3>Predict Game</h3>
              <NavLink to="/get-started" style={{ textDecoration: "none" }}>
                <Started>Get started</Started>
              </NavLink>
            </Down>
          </Card>

          <Card>
            <Img src={pic3} />
            <Down>
              <h3>View Leader Board</h3>
              <NavLink to="/get-started" style={{ textDecoration: "none" }}>
                <Started>Get started</Started>
              </NavLink>
            </Down>
          </Card>

          <Card>
            <Img src={pic2} />
            <Down>
              <h3>Get Your Prizes</h3>
              <NavLink to="/get-started" style={{ textDecoration: "none" }}>
                <Started>Get started</Started>
              </NavLink>
            </Down>
          </Card>
        </Boxhold>
      </Wrapper>
    </Container>
  );
};

export default Methods;
const Started = styled.div`
  width: 100px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-top: 50px;
  background-color: #6228fc;
`;
const Down = styled.div`
  width: 100%;
  padding: 20px;
  flex-direction: column;
  h3 {
    font-size: 20px;
    line-height: 1.4;
    width: 220px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Card = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 340px;
  }
`;
const Boxhold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 500px) {
    justify-content: center;
    display: flex;
  }
`;
const Top = styled.div`
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  h1 {
    color: #00214f;
    @media screen and (max-width: 500px) {
      font-size: 26px;
      text-align: center;
    }
    @media screen and (max-width: 375px) {
      font-size: 22px;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 92%;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
