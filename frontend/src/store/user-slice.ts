import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    //닉네임
    userNickname: string;
    roomId: string;
    isReady: boolean;
}
const initialState: UserState = {
    userNickname: '',
    roomId: '',
    isReady: false,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        //닉네임 설정
        userNicknameState: (state, action) => {
            state.userNickname = action.payload;
        },
        roomIdState: (state, action) => {
            state.roomId = action.payload;
        },
        readyState: (state, action) => {
            state.isReady = action.payload;
        },
    },
});
export const { userNicknameState, roomIdState, readyState } = userSlice.actions;
export default userSlice.reducer;
