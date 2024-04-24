import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    //닉네임
    userNickname: string;
}
const initialState: UserState = {
    userNickname: '',
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        //닉네임 설정
        userNicknameState: (state, action) => {
            state.userNickname = action.payload;
        },
    },
});
export const { userNicknameState } = userSlice.actions;
export default userSlice.reducer;
