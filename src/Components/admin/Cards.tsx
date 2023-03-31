import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import styled from "styled-components";
import { UseAppSelector } from "../Global/Store";

const Cards = () => {
  const user = UseAppSelector((state) => state.Client);
  return (
    <Container>
      <Card>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#2a9d8f",
            }}>
            <MdOutlineAccountBalanceWallet />
          </IconHold>
          <CardTitle>Name: {user?.name} </CardTitle>
          <CardInfo></CardInfo>
        </CardHold>
      </Card>

      <Card>
        <CardHold>
          <IconHold
            style={{
              backgroundColor: "#f4a261",
            }}>
            <GiExpense />
          </IconHold>
          <CardTitle>Admin ID: {user?._id}</CardTitle>
          <CardInfo> </CardInfo>
        </CardHold>
      </Card>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Card = styled.div`
  height: 180px;
  width: 228px;
  background-color: #fff;
  border-radius: 3px;
  border-bottom: 2px solid #0d71fa;
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  margin: 10px;

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
`;
