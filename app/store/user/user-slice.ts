import {createSlice} from '@reduxjs/toolkit';

export interface userModel {
  user: {
    id: number;
    username: string;
    email: string;
  };
  jwt: string;
}
export interface UserState {
  user: userModel | undefined;
}

const initialState: UserState = {
  user: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {logout, saveUser} = userSlice.actions;

export default userSlice.reducer;
