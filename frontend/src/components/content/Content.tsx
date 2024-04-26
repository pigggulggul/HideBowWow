import { useRecoilState, useRecoilValue } from 'recoil';
import {
    CharacterSelectFinishedAtom,
    MeAtom,
    PlayerAtom,
    RoomAtom,
} from '../../store/PlayersAtom';
import { MainCanvas } from './canvas/MainCanvas';
import { CanvasLayout } from './canvasLayout/Layout';
import { Lobby } from './lobby/Lobby';
import { socket } from '../../sockets/clientSocket';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentPlayersInfo, RoomInfo } from '../../types/GameType';
import { useEffect, useState } from 'react';
import { meInfoState, meSelectedInfoState } from '../../store/user-slice';
import StompClient from '../../websocket/StompClient';

export function Content() {
    const dispatch = useDispatch();
    const stompClient = StompClient.getInstance();
    const characterSelectedFinished = useRecoilValue(
        CharacterSelectFinishedAtom
    );
    //방정보.
    const roomState: RoomInfo = useSelector(
        (state: any) => state.reduxFlag.userSlice.currentRoom
    );
    const meName = useSelector(
        (state: any) => state.reduxFlag.userSlice.userNickname
    );
    const meInfo = useSelector(
        (state: any) => state.reduxFlag.userSlice.meInfo
    );
    //내정보.
    const [me, setMe] = useState<CurrentPlayersInfo>({
        direction: [0, 0, 0],
        position: [0, 0, 0],
        isDead: null,
        isSeeker: null,
        nickname: '',
        selectedIndex: 5,
    });
    //플레이어 전체정보
    const [players, setPlayers] = useState<CurrentPlayersInfo[]>(
        roomState.roomPlayers
    );
    useEffect(() => {
        if (meInfo.nickname !== '') {
            setMe(meInfo);
        }
    }, [meInfo]);
    useEffect(() => {
        setPlayers(roomState.roomPlayers);
    }, [roomState]);
    useEffect(() => {
        if (me.nickname !== '' && me.selectedIndex !== null) {
            console.log('보낼게욧', me);
            console.log(
                JSON.stringify({
                    type: 'player.object',
                    roomId: roomState.roomId,
                    sender: meName,
                    data: {
                        nickname: me.nickname,
                        selectedIndex: me.selectedIndex,
                        position: me.position,
                        direction: me.direction,
                        isDead: me.isDead,
                        isSeeker: me.isSeeker,
                    },
                })
            );
            stompClient.sendMessage(
                `/player.object`,
                JSON.stringify({
                    type: 'player.object',
                    roomId: roomState.roomId,
                    sender: meName,
                    data: {
                        nickname: me.nickname,
                        selectedIndex: me.selectedIndex,
                        position: me.position,
                        direction: me.direction,
                        isDead: me.isDead,
                        isSeeker: me.isSeeker,
                    },
                })
            );
        }
    }, [me]);
    useEffect(() => {
        if (roomState) {
            roomState.roomPlayers.map((item: CurrentPlayersInfo) => {
                if (item.nickname == meName) {
                    dispatch(meInfoState(item));
                }
            });
        }
    }, [roomState]);

    const handleSelectedIndex = (index: number) => {
        setMe((prevMe) => ({ ...prevMe, selectedIndex: index })); // 새 객체를 반환하여 selectedIndex 업데이트

        console.log('처음 players', players);
        const updatedPlayers = players.map((player) => {
            if (player.nickname === me.nickname) {
                setMe((prev) => ({ ...prev, selectedIndex: index }));
                return { ...player, selectedIndex: index };
            }
            return player;
        });
        setPlayers(updatedPlayers);
        console.log('바뀐 Player정보', updatedPlayers);
        dispatch(meSelectedInfoState(index));
    };

    const selectedList: number[] = [
        Math.floor(Math.random() * 19 + 1),
        Math.floor(Math.random() * 19 + 1),
        Math.floor(Math.random() * 19 + 1),
    ];

    return (
        <>
            {me ? (
                <CanvasLayout>
                    {(roomState.roomState === 1 || roomState.roomState === 2) &&
                    !me.isSeeker &&
                    me.selectedIndex === null ? (
                        <div className="absolute flex items-center justify-between w-[80%] h-[80%] z-10">
                            <div className="w-[30%] h-[80%] flex flex-col justify-center items-center bg-white border-[0.4vw] rounded-[0.6vw] border-gray-700">
                                나무
                                <p
                                    className="bg-red-200 px-[2vw] py-[1vw] rounded-[0.6vw] border-[0.2vw] border-red-500 cursor-pointer"
                                    onClick={() => {
                                        handleSelectedIndex(selectedList[0]);
                                    }}
                                >
                                    선택하기
                                </p>
                                <p className=" py-[1vw] px-[1vw] bg-sky-200 border-[0.2vw] border-sky-400 rounded-[0.6vw] my-[0.4vw] cursor-pointer">
                                    리롤하기
                                </p>
                            </div>
                            <div className="w-[30%] h-[80%] flex flex-col justify-center items-center bg-white border-[0.4vw] rounded-[0.6vw] border-gray-700">
                                트리
                                <p
                                    className="bg-red-200 px-[2vw] py-[1vw] rounded-[0.6vw] border-[0.2vw] border-red-500 cursor-pointer"
                                    onClick={() => {
                                        handleSelectedIndex(selectedList[1]);
                                    }}
                                >
                                    선택하기
                                </p>{' '}
                                <p className=" py-[1vw] px-[1vw] bg-sky-200 border-[0.2vw] border-sky-400 rounded-[0.6vw] my-[0.4vw] cursor-pointer">
                                    리롤하기
                                </p>
                            </div>
                            <div className="w-[30%] h-[80%] flex flex-col justify-center items-center bg-white border-[0.4vw] rounded-[0.6vw] border-gray-700">
                                미끄럼틀
                                <p
                                    className="bg-red-200 px-[2vw] py-[1vw] rounded-[0.6vw] border-[0.2vw] border-red-500 cursor-pointer"
                                    onClick={() => {
                                        handleSelectedIndex(selectedList[2]);
                                    }}
                                >
                                    선택하기
                                </p>{' '}
                                <p className=" py-[1vw] px-[1vw] bg-sky-200 border-[0.2vw] border-sky-400 rounded-[0.6vw] my-[0.4vw] cursor-pointer">
                                    리롤하기
                                </p>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    <MainCanvas />
                </CanvasLayout>
            ) : (
                <></>
            )}
        </>
    );
}
