import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface userData {
  name: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  _id: any;
}

interface AdminData {
  name: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  _id: any;
}
interface predict {
  teamAScore: string;
  teamBScore: string;
  amount: number;
}

interface MarchInterface {
  teamA: string;
  teamB: string;
  Odds: number;
  _id: string;
  startPlay: boolean;
}
const initialState = {
  Client: {} as userData | null,
  Admin: {} as AdminData | null,
  Marches: {} as MarchInterface | null,
  Predict: {} as predict | null,
};

const ReduxState = createSlice({
  name: "easyPay",
  initialState,
  reducers: {
    registerClient: (state, { payload }: PayloadAction<userData>) => {
      state.Client = payload;
    },

    Predict: (state, { payload }: PayloadAction<predict>) => {
      state.Predict = payload;
    },
    logOut: (state) => {
      state.Client = null;
    },
    AllMarches: (state, { payload }: PayloadAction<MarchInterface>) => {
      state.Marches = payload;
    },
  },
});

export const { registerClient, logOut, AllMarches, Predict } =
  ReduxState.actions;

export default ReduxState.reducer;
