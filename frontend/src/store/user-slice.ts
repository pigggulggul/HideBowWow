import { createSlice } from '@reduxjs/toolkit';
import { CurrentPlayersInfo, RoomInfo } from '../types/GameType';

export interface UserState {
    //닉네임
    userNickname: string;
    roomId: string;
    isReady: boolean;
    currentRoom: RoomInfo;
    meInfo: CurrentPlayersInfo;
}
const initialState: UserState = {
    userNickname: '',
    roomId: '',
    isReady: false,
    currentRoom: {
        isPublic: true,
        roomId: '',
        roomAdmin: '',
        roomMap: null,
        roomPassword: '',
        roomPlayers: [],
        roomState: null,
        roomTime: null,
        roomTitle: '',
    },
    meInfo: {
        nickname: '',
        selectedIndex: null,
        position: [0, 0, 0],
        direction: [0, 0, 0],
        isDead: null,
        isSeeker: null,
    },
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
        currentRoomState: (state, action) => {
            state.currentRoom = action.payload;
        },
        addPeopleRoomState: (state, action) => {
            state.currentRoom = {
                ...state.currentRoom,
                roomPlayers: [...state.currentRoom.roomPlayers, action.payload],
            };
        },
        removePeopleRoomState: (state, action) => {
            state.currentRoom = {
                ...state.currentRoom,
                roomPlayers: state.currentRoom.roomPlayers.filter(
                    (player) => player.nickname !== action.payload.nickname
                ),
            };
        },
        meInfoState: (state, action) => {
            state.meInfo = action.payload;
        },
        meSelectedInfoState: (state, action) => {
            state.meInfo.selectedIndex = action.payload;
        },
    },
});
export const {
    userNicknameState,
    roomIdState,
    readyState,
    currentRoomState,
    meInfoState,
    addPeopleRoomState,
    meSelectedInfoState,
    removePeopleRoomState,
} = userSlice.actions;
export default userSlice.reducer;
