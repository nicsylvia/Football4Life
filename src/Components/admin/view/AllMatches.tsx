import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import styled from "styled-components";
import { Endpoint, ViewAllMatches } from "../../api/adminEndpoints";
import axios from "axios";
import { UseAppDispatch, UseAppSelector } from "../../Global/Store";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AllMarches } from "../../Global/reduxState";
// import { getOneAdmin } from "../api/adminEndpoints";
// import { UseAppSelector } from "../Global/Store";

const AllMatches = () => {
  const Getallmatch = useQuery({
    queryFn: ViewAllMatches,
    queryKey: ["All Matches"],
  });

  const user = UseAppSelector((state) => state.Client);

  const match = UseAppSelector((state) => state.Marches);

  const navigate = useNavigate();

  const dispatch = UseAppDispatch();

  const [startPlay, setStartPlay] = useState<boolean>(false);

  const updateMatch = async (e: any) => {
    e.preventDefault();
    await axios
      .patch(`${Endpoint}/${user?._id}/${match?._id}/start-match`, {
        startPlay,
      })
      .then((res) => {
        console.log("this is res", res);
        Swal.fire({
          title: "Match has started successfully",
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
      {Getallmatch?.data?.data?.map((el: any) => (
        <Card>
          <CardHold>
            <IconHold
              style={{
                backgroundColor: "#0D71FA",
              }}>
              <BiFootball />
            </IconHold>
            <CardTitle>Team A: {el?.teamA}</CardTitle>
            <CardTitle>Team B: {el?.teamB}</CardTitle>
            <CardInfo>
              {el?.startPlay ? (
                <button style={{ cursor: "pointer" }} onClick={updateMatch}>
                  Start March
                </button>
              ) : (
                <button style={{ cursor: "disabled" }}>ENDED </button>
              )}
            </CardInfo>
          </CardHold>
        </Card>
      ))}
    </Container>
  );
};

export default AllMatches;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  justify-content: flex-end;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Card = styled.div`
  padding-bottom: 10px;
  height: 150px;

  width: 300px;
  background-color: #c5c4c4;
  border-radius: 3px;
  border-bottom: 2px solid #0d71fa;
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  margin: 40px;

  @media (max-width: 1024px) {
    width: 320px;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const CardHold = styled.div`
  width: 85%;
  margin-top: 15px;
`;

const IconHold = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 15px;
`;
const CardTitle = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;
const CardInfo = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;

  button {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    :hover {
      color: white;
      background-color: black;
      cursor: pointer;
    }
  }
`;
