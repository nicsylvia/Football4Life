import React, { useState } from "react";

import styled from "styled-components";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";

import { useQuery } from "@tanstack/react-query";
import { UseAppDispatch, UseAppSelector } from "../Global/Store";
import { singleUser } from "../api/User";
import { ViewAllMatches } from "../api/adminEndpoints";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Predict } from "../Global/reduxState";
const Latesttransact = () => {
  const user = UseAppSelector((state) => state.Client);
  const match = UseAppSelector((state) => state.Marches);
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [amount, setAmount] = useState(0);

  const AllMatches = useQuery({
    queryFn: ViewAllMatches,
    queryKey: ["Matches"],
  });

  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow(false);
  };
  const PredictionForm = async (e: any) => {
    e.preventDefault();
    await axios
      .post(
        `https://football-predict-api.onrender.com/api/${user?._id}/${match?._id}/create-prediction`,
        {
          teamAScore,
          teamBScore,

          amount,
        }
      )
      .then((res) => {
        Swal.fire({
          title: "Predict uploaded successfully",
          html: "Redirecting to View Predictions",
          timer: 2000,
          timerProgressBar: true,

          willClose: () => {
            navigate("/userdashboard");
          },
        });
        dispatch(Predict(res.data.data));
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
        <Title>View all Matches</Title>
        <p>click on match to make a prediction</p>
        <Table>
          <table>
            <tr>
              <th>Team A</th>
              <th>Team B</th>
              <th>Odds</th>
              <th>Time uploaded</th>
            </tr>

            {AllMatches?.data?.data?.map((el: any) => (
              <tr key={el?._id} onClick={Toggle}>
                <td>{el?.teamA} </td>
                <td>{el?.teamB} </td>
                <td>{el?.Odds}</td>
                <td>{el?.dateTime}</td>
              </tr>
            ))}
          </table>
        </Table>
        <BtnHold>
          <Button>View More</Button>
        </BtnHold>
        {show ? (
          <Slidein>
            <Wallets>
              <Icon onClick={Toggle2}>
                <MdOutlineCancel />
              </Icon>
              <Card2>
                <Circle>
                  <IoIosFootball />
                </Circle>

                <Wallet>
                  <p>Predict Your game</p>
                  <h3></h3>
                </Wallet>
              </Card2>

              <Tap>
                <h3>Predict Match Details: </h3>
                <input
                  onChange={(e: any) => {
                    setTeamAScore(e.target.value);
                  }}
                  type="text"
                  placeholder="Team A Score :"
                />
              </Tap>

              <Tap2>
                <input
                  onChange={(e: any) => {
                    setTeamBScore(e.target.value);
                  }}
                  type="text"
                  placeholder="Team B Score:"
                />
              </Tap2>

              <Tap2>
                <input
                  onChange={(e: any) => {
                    setAmount(e.target.value);
                  }}
                  type="text"
                  placeholder="Amount :"
                />
              </Tap2>

              <Holder>
                <button onClick={PredictionForm}>Predict Match</button>
              </Holder>
            </Wallets>
          </Slidein>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Latesttransact;

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Table = styled.div`
  overflow-x: auto;
  font-size: 14px;
  table {
    width: 100%;
  }
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
    cursor: pointer;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
    cursor: pointer;
  }
  th,
  td {
    padding: 15px 10px;
    text-align: left;
    cursor: pointer;
  }
  th {
    font-size: 13px;
    background-color: #0d71fa;
    color: #fff;
    cursor: pointer;
  }
`;

const BtnHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  height: 35px;
  width: 150px;
  margin-top: 15px;
  font-family: poppins;
  border: 1px solid #0d71fa;
  /* color: #6d6d6e; */
  color: #0d71fa;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  /* margin-right: 10px; */
  transition: all 350ms;
  :hover {
    transform: scale(0.98);
  }
  @media (max-width: 500px) {
    height: 40px;
    width: 100px;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Holder = styled.div`
  display: flex;
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
const Wallets = styled.div`
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
  z-index: 12345;
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
