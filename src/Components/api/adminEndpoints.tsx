import axios from "axios";

interface MarchInterface {
  teamA: string;
  teamB: string;
  Odds: string;
  userID: string;
}

interface startMatch {
  startPlay: boolean;
}

export const Endpoint = "https://football-predict-api.onrender.com";

// Get single user/admin:
export const SingleAdmin = async (userID: any) => {
  return await axios
    .get(`${Endpoint}/api/getsingleuser/${userID}`)
    .then((res) => res.data);
};

// Upload Matches:
export const UploadAMatch = async ({
  teamA,
  teamB,
  Odds,
  userID,
}: MarchInterface) => {
  return await axios
    .post(`${Endpoint}/api/${userID}/create-match`, { teamA, teamB, Odds })
    .then((res) => res.data);
};

// View all matches:
export const ViewAllMatches = async () => {
  return axios.get(`${Endpoint}/api/view-match`).then((res) => res.data);
};

// Start matches by admin:
export const StartMatch = async (
  userId: any,
  matchId: any,
  data: startMatch
) => {
  return await axios.patch(
    `${Endpoint}/${userId}/${matchId}/start-match`,
    data
  );
};
