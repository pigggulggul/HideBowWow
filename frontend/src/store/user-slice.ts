import { createSlice } from '@reduxjs/toolkit';
import {
    ChatType,
    CollideObject,
    CurrentPlayersInfo,
    MapSize,
    RoomInfo,
} from '../types/GameType';

export interface UserState {
    //닉네임
    userNickname: string;
    roomId: string;
    isReady: boolean;
    currentRoom: RoomInfo;
    meInfo: CurrentPlayersInfo;
    givenChoice: number[];
    collideObj: CollideObject[];
    meHeart: number;
    bgmFlag: boolean;
    mapSize: MapSize;
    chatData: ChatType[];
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
    givenChoice: [],
    collideObj: [],
    meHeart: 0,
    bgmFlag: true,
    mapSize: {
        minX: -100,
        maxX: 100,
        minZ: -100,
        maxZ: 100,
    },
    chatData: [],
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
        heartState: (state, action) => {
            state.meHeart = action.payload;
        },
        decrementHeartState: (state) => {
            state.meHeart -= 1;
        },
        meDead: (state, action) => {
            state.meInfo.isDead = action.payload;
        },
        givenChoiceState: (state, action) => {
            state.givenChoice = action.payload;
        },
        collideObjectState: (state, action) => {
            state.collideObj = action.payload;
        },
        addCollideObjectState: (state, action) => {
            state.collideObj = [...state.collideObj, action.payload];
        },
        removeCollideObjectState: (state, action) => {
            // action.payload에 해당하는 인덱스의 객체를 제거
            state.collideObj = state.collideObj.filter(
                (_item, index) => index !== action.payload
            );
        },
        bgmFlagState: (state, action) => {
            state.bgmFlag = action.payload;
        },
        mapSizeState: (state, action) => {
            state.mapSize = action.payload;
        },
        chatDataState: (state, action) => {
            state.chatData = action.payload;
        },
        addChatDataState: (state, action) => {
            state.chatData = [...state.chatData, action.payload];
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
    meDead,
    removePeopleRoomState,
    givenChoiceState,
    addCollideObjectState,
    removeCollideObjectState,
    collideObjectState,
    heartState,
    decrementHeartState,
    bgmFlagState,
    mapSizeState,
    chatDataState,
    addChatDataState,
} = userSlice.actions;
export default userSlice.reducer;
