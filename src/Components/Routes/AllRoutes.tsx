import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import LeaderBoard from "../admin/LeaderBoard/Dashboard";
import Match from "../admin/Start/Dashboard";
import UpdateMatchScore from "../admin/UpdateMatchScore";
import Users from "../admin/view/Dashboard";
import ViewAllMatch from "../admin/view/ViewAllMatch";

import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

//User Routes begins from here
import UserDashboard from "../UserDashboard/Dashboard";
import UserLeaderboard from "../UserDashboard/LeaderBoard/Dashboard";
import UserMatch from "../UserDashboard/Start/Dashboard";
import Prediction from "../UserDashboard/viewPrediction/Dashboard";
import AllMatches from "../admin/view/AllMatches";
import HomeSreeen from "../beer/landingPage/HomeSreeen";

const AllRoutes = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <HomeSreeen />,
    },
    {
      path: "/get-started",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/admindashboard",
      element: <Dashboard />,
    },
    {
      path: "/leaderboard",
      element: <LeaderBoard />,
    },
    {
      path: "/view-match",
      element: <Match />,
    },
    {
      path: "/view-users",
      element: <Users />,
    },
    {
      path: "/update-match-score",
      element: <UpdateMatchScore />,
    },
    // {
    //   path: "/view-all-matches",
    //   element: <ViewAllMatch />,
    // },
    {
      path: "/start-a-match",
      element: <ViewAllMatch />,
    },
    {
      path: "/userdashboard",
      element: <UserDashboard />,
    },
    {
      path: "/useViewBoard",
      element: <UserLeaderboard />,
    },
    {
      path: "/userMatch",
      element: <UserMatch />,
    },
    {
      path: "/Prediction",
      element: <Prediction />,
    },
  ]);
  return <div>{elements}</div>;
};

export default AllRoutes;
