import React, { useState } from "react";
import styled from "styled-components";
import img from "../Assets/person.png";
import Cards from "./Cards";
import Latesttransact from "./Latesttransact";
import { FaGoogleWallet } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import Recent from "./view/ViewPredictions";

import { IoIosFootball } from "react-icons/io";

import { AllMarches } from "../Global/reduxState";
import { UseAppDispatch, UseAppSelector } from "../Global/Store";
import axios from "axios";

const Homes = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow(false);
  };
  const admin = UseAppSelector((state) => state.Client);
  console.log("this is admin id", admin?._id);
  const dispatch = UseAppDispatch();

  const navigate = useNavigate();

  // Validation for the create match
  const MatchSchema = yup
    .object({
      teamA: yup.string().required("Please enter the first team"),
      teamB: yup.string().required("Please enter the second team"),
      Odds: yup.number().required("Please enter odds for the game"),
    })
    .required();

  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [Odds, setOdds] = useState(0);

  type formData = yup.InferType<typeof MatchSchema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(MatchSchema),
  });

  const postCard = async (e: any) => {
    e.preventDefault();
    await axios
      .post(
        `https://football-predict-api.onrender.com/api/${admin?._id}/create-match`,
        {
          teamA,
          teamB,

          Odds,
        }
      )
      .then((res) => {
        console.log("this is res", res);
        Swal.fire({
          title: "Match uploaded successfully",
          html: "Redirecting to View Match",
          timer: 2000,
          timerProgressBar: true,

          willClose: () => {
            navigate("/start-a-match");
          },
        });
        dispatch(AllMarches(res.data.data));
      })
      .catch((error) => {
        Swal.fire({
          title: "Upload failed",
          text: "Something went wrong! .....Make sure you did the right thing",
          icon: "error",
        });
      });
  };

  return (
    <Container>
      <Wrapper>
        <br />
        <br />
        <Top>
          <Left>
            <Bold>Dashboard</Bold>
            <button onClick={Toggle}>Create Matches</button>
          </Left>
          {show ? (
            <Slidein>
              <Matches>
                <Icon onClick={Toggle2}>
                  <MdOutlineCancel />
                </Icon>
                <Card2>
                  <Circle>
                    <IoIosFootball />
                  </Circle>

                  <Wallet>
                    <p>UPLOAD MATCHES</p>
                    <h3></h3>
                  </Wallet>
                </Card2>

                <Tap>
                  <h3>March Details: </h3>
                  <input
                    type="text"
                    placeholder="Team A :"
                    onChange={(e: any) => {
                      setTeamA(e.target.value);
                    }}
                    // {...register("teamA")}
                  />
                </Tap>

                <Tap2>
                  <input
                    type="text"
                    placeholder="Team B :"
                    onChange={(e: any) => {
                      setTeamB(e.target.value);
                    }}
                    // {...register("teamB")}
                  />
                </Tap2>

                <Tap2>
                  <input
                    type="number"
                    placeholder="March Odds :"
                    // {...register("Odds")}
                    onChange={(e: any) => {
                      setOdds(e.target.value);
                    }}
                  />
                </Tap2>
                <Holder>
                  <button onClick={postCard}>Create Match</button>
                </Holder>
              </Matches>
            </Slidein>
          ) : null}
        </Top>
        <br />
        <br />
        <br />
        <Cards />
        <Recent />
        <Latesttransact />
      </Wrapper>
    </Container>
  );
};

export default Homes;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 160%;
    height: 50px;
    background-color: #3184f7;

    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 60px;
    cursor: pointer;
    margin-right: 10px;
  }
`;
const Icon = styled.div`
  position: absolute;
  font-size: 25px;
  top: 15px;
  cursor: pointer;
`;
const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 7px;
  outline-color: #39a081;
  outline-width: 3px;
  margin-top: 3px;
  border: 1px solid gray;
`;
const Tap2 = styled.div`
  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 500;
  }
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  input {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
    padding: 15px;
    outline: none;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
`;
const Tap = styled.div`
  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  input {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
    padding: 15px;
    outline: none;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  /* background-color: #3184f7; */
  background-color: #4f71a1;
  color: #fff;
  font-size: 30px;
`;
const Card2 = styled.div`
  width: 300px;
  height: 150px;
  margin-top: 30px;
  background-color: #0d71fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;
const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  margin-top: 15px;
  p {
    color: #fff;
    margin: 0;
  }
  h3 {
    color: #fff;
    margin-top: 5px;
    font-size: 23px;
  }
`;
const Matches = styled.form`
  width: 330px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Slidein = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  position: fixed;
  justify-content: flex-end;
  animation: slide-in 0.5s ease-out;

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
const Img = styled.img`
  height: 45px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.div`
  p {
    color: #718096;
    font-family: Karla, sans-serif;
    font-size: 0.875rem;
    margin: 0;
  }
  margin-top: 7px;
`;
const Bold = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0d71fa;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    color: #fff;
    position: relative;
    border: none;
    outline: none;
  }
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 260px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 0px;
  }
  /* background-color: red; */
`;
