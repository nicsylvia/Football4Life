import React from "react";
import styled from "styled-components";

import Dashboard from "../Dashboard";
import Dashhead from "../Dashhead";
import SideBar from "../SideBar";
import AllMatches from "./AllMatches";

const ViewAllMatch = () => {
  return (
    <div>
      <>
        <Dashhead />
        <SideBar />
        <AllMatches />
      </>
    </div>
  );
};

export default ViewAllMatch;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
