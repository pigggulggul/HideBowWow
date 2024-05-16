/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChatType, RoomInfo } from '../types/GameType';
import { getRoom } from '../api/rooms';
import { httpStatusCode } from '../components/utils/http-status';
import { useDispatch, useSelector } from 'react-redux';
import StompClient from '../websocket/StompClient';
import {
    chatDataState,
    currentRoomState,
    mapSizeState,
    readyState,
    rerollState,
} from '../store/user-slice';
import backgroundImage from '../assets/images/bg/background-main.png';
import mainMap from '../assets/images/bg/map-Rich.png';

export default function RoomPage() {
    const mapInfo = ['richroom', 'farm'];
    const [settingRoomFlag, setSettingRoomFlag] = useState<boolean>(false);
    const [botCount, setBotCount] = useState(0);
    const [room, setRoom] = useState<RoomInfo>({
        isPublic: true,
        roomId: '',
        roomAdmin: '',
        roomMap: '',
        roomPassword: '',
        roomPlayers: [],
        roomState: 0,
        roomTime: 0,
        roomTitle: '',
        botCnt: 0,
        mapValue: null,
    });
    const [mapIndex, setMapIndex] = useState<number>(0);
    const stompClient = StompClient.getInstance();
    const { state } = useLocation();
    const navigate = useNavigate();
    const changeSettingRoomFlag = () => {
        setSettingRoomFlag(!settingRoomFlag);
    };
    const meName = useSelector(
        (state: any) => state.reduxFlag.userSlice.userNickname
    );
    const isReady = useSelector(
        (state: any) => state.reduxFlag.userSlice.isReady
    );
    const currentRoom = useSelector(
        (state: any) => state.reduxFlag.userSlice.currentRoom
    );
    const channelIndex = useSelector(
        (state: any) => state.reduxFlag.userSlice.channelIndex
    );

    ///////// 채팅 관련 //////////
    const chatList = useSelector(
        (state: any) => state.reduxFlag.userSlice.chatData
    );
    const [chatContent, setChatContent] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    //스크롤 탐지용
    const messageEndRef = useRef<HTMLDivElement>(null);
    ///////// 채팅 관련 //////////

    const dispatch = useDispatch();
    const loadRoom = async (state: string) => {
        const res = await getRoom(state, channelIndex);
        if (res.status === httpStatusCode.OK) {
            // console.log(res.data);
            setRoom(res.data.data);
            dispatch(currentRoomState(res.data.data));
        }
    };

    const playGame = () => {
        if (currentRoom.roomMap === 'Bar') {
            dispatch(
                mapSizeState({
                    minX: -60,
                    maxX: 40,
                    minZ: -40,
                    maxZ: 90,
                    minY: -1,
                    maxY: 8,
                })
            );
        } else {
            dispatch(
                mapSizeState({
                    minX: -60,
                    maxX: 40,
                    minZ: -40,
                    maxZ: 90,
                    minY: -1,
                    maxY: 8,
                })
            );
        }
        dispatch(chatDataState([]));
        if (currentRoom.roomAdmin === meName) {
            console.log('시작 룸', room);
            stompClient.sendMessage(
                `/room.gameInit`,
                JSON.stringify({
                    type: 'room.gameInit',
                    roomId: state,
                    sender: meName,
                    data: {
                        room
                    },
                })
            );
            navigate(`/game/${state}`, { state: state });
        } else {
            alert('방장만 시작 할 수 있습니다.');
        }
    };

    useEffect(() => {
        dispatch(readyState(false));
        dispatch(chatDataState([]));
        dispatch(rerollState(0));
    }, []);
    useEffect(() => {
        if (state) {
            loadRoom(state);
        }
    }, [state]);
    useEffect(() => {
        if (isReady) {
            navigate(`/game/${state}`, { state: state });
        }
    }, [isReady]);
    useEffect(() => {
        // console.log('방정보', currentRoom);
        setRoom(currentRoom);
        setBotCount(currentRoom.botCnt);
    }, [currentRoom]);
    useEffect(() => {
        // console.log('바뀐정보', room);
    }, [room]);
    useEffect(() => {
        if (room.roomId && room.roomTitle && room.roomPlayers) {
            stompClient.sendMessage(
                `/room.modify`,
                JSON.stringify({
                    type: 'room.modify',
                    roomId: currentRoom.roomId,
                    sender: meName,
                    data: {
                        roomId: room.roomId,
                        roomAdmin: room.roomAdmin,
                        roomTitle: room.roomTitle,
                        roomPassword: room.roomPassword,
                        roomState: room.roomState,
                        roomTime: room.roomTime,
                        roomMap: mapInfo[mapIndex],
                        roomPlayers: room.roomPlayers,
                        botCnt: botCount,
                    },
                })
            );
        }
    }, [mapIndex, botCount]);

    const sendEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (inputRef.current && chatContent !== '') {
                // console.log('보낼게염');
                stompClient.sendMessage(
                    `/chat.player`,
                    JSON.stringify({
                        type: 'chat.player',
                        roomId: currentRoom.roomId,
                        sender: meName,
                        data: {
                            nickname: meName,
                            content: chatContent,
                        },
                    })
                );
                setChatContent('');
            }
        }
    };
    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [chatList]);

    const outRoom = () => {
        stompClient.sendMessage(
            `/player.exit`,
            JSON.stringify({
                type: 'player.exit',
                roomId: state,
                sender: meName,
                data: {
                    nickname: meName,
                },
            })
        );
        window.location.replace('/lobby');
    };

    const prevMap = () => {
        if (mapIndex <= 0) {
            setMapIndex(mapInfo.length - 1);
        } else {
            setMapIndex((prev) => prev - 1);
        }
    };
    const nextMap = () => {
        if (mapIndex >= mapInfo.length - 1) {
            setMapIndex(0);
        } else {
            setMapIndex((prev) => prev + 1);
        }
    };
    const handleBotCntIncrease = () => {
        if (currentRoom.roomAdmin == meName)
            setBotCount(botCount >= 3 ? 4 : botCount + 1);
    };

    const handleBotCntDecrease = () => {
        if (currentRoom.roomAdmin == meName)
            setBotCount(botCount > 0 ? botCount - 1 : 0);
    };



    return (
        <section
            className="relative w-full h-full flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="relative w-[80%] h-[90%] p-[1vw] flex justify-between border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 ">
                <div className="w-[60%] h-full flex-col justify-center">
                    <div className="w-full h-[14%] flex justify-between items-center mx-auto my-[1vw] px-[1vw] py-[1.2vw] text-[1.2vw] border-[0.2vw] bg-white border-white rounded-[0.6vw] ">
                        <p>{room?.roomTitle}</p>
                        <p
                            className="cursor-pointer"
                            onClick={() => {
                                changeSettingRoomFlag();
                            }}
                        >
                            변경
                        </p>
                    </div>
                    <div className="w-full h-[86%] flex flex-wrap content-start ">
                        <div className="w-full h-[60%] flex flex-wrap content-start ">
                            {room?.roomPlayers.map((item, index) => {
                                return (
                                    <div
                                        key={'currentPeople' + index}
                                        className="w-[45%] h-[15%] px-[1vw] my-[0.6vw] mx-[0.4vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] cursor-pointer border-white bg-sky-400 text-white hover:bg-sky-500 "
                                        style={
                                            item.nickname === meName
                                                ? {
                                                      borderColor: 'black',
                                                      color: 'black',
                                                  }
                                                : {}
                                        }
                                    >
                                        <p className="w-[80%] text-[1.4vw] text-start whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {item.nickname}
                                        </p>
                                        {room?.roomAdmin === item.nickname ? (
                                            <div className="w-[20%] flex flex-col">
                                                <p className="text-[1.4vw]">
                                                    방장
                                                </p>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="w-full h-[34%] bg-white my-[0.6vw] mx-[0.4vw] rounded-[0.6vw]">
                            <div className="w-[full] h-[85%] p-[0.4vw] overflow-auto">
                                {chatList.map(
                                    (item: ChatType, index: number) => {
                                        return (
                                            <div
                                                className="w-full flex items-center justify-start my-1 text-[1.1vw]"
                                                key={'chat key : ' + index}
                                            >
                                                <p className="w-[18%] text-start whitespace-nowrap overflow-hidden overflow-ellipsis">
                                                    {item.nickname}
                                                </p>
                                                <p className="w-[2%]">:</p>
                                                <p className="w-[80%] text-start">
                                                    {item.content}
                                                </p>
                                            </div>
                                        );
                                    }
                                )}
                                <div ref={messageEndRef}></div>
                            </div>
                            <input
                                ref={inputRef}
                                className="w-[99%] h-[15%] py-[0.4vw] overflow-auto border"
                                value={chatContent}
                                onChange={(e) => {
                                    setChatContent(e.target.value);
                                }}
                                placeholder="채팅을 입력해주세요"
                                onKeyDown={sendEnter}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-[40%] h-full flex flex-col items-center justify-around">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-[80%] border-[0.3vw] border-white rounded-[0.6vw] bg-white"
                            src={mainMap}
                            alt=""
                            style={{ aspectRatio: 1 / 1 }}
                        />
                        <div className="flex text-[2vw] text-white">
                            <p className="mx-[1vw]" onClick={prevMap}>
                                ⬅
                            </p>
                            <p>{mapInfo[mapIndex]}</p>
                            <p className="mx-[1vw]" onClick={nextMap}>
                                ➡
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex text-[2vw] text-white">
                            <button
                                className="mx-[1vw]"
                                onClick={() => handleBotCntDecrease()}
                            >
                                {' '}
                                -{' '}
                            </button>
                            <p>{botCount}</p>
                            <button
                                className="mx-[1vw]"
                                onClick={() => handleBotCntIncrease()}
                            >
                                {' '}
                                +{' '}
                            </button>
                        </div>
                        <p className="text-white">봇의 개수</p>
                    </div>

                    <div className="w-full flex justify-between">
                        <div
                            className="w-[45%] h-full px-[1vw] bg-rose-400 text-white py-[1vw] border-[0.3vw] rounded-[0.6vw] border-white cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 "
                            onClick={() => {
                                outRoom();
                            }}
                        >
                            <p className="text-[1.4vw]">나가기</p>
                        </div>
                        <div
                            className="w-[45%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-white bg-sky-400 cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
                            onClick={() => {
                                playGame();
                            }}
                        >
                            <p className="text-[1.4vw] text-white ">게임시작</p>
                        </div>
                    </div>
                </div>
            </div>
            {settingRoomFlag ? (
                <div className="absolute w-[40%] h-[40%] flex flex-col items-center justify-between border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 overflow-y-auto">
                    <div className="w-full flex flex-col items-center">
                        <p className="text-[1.8vw] my-[1vw]">방 수정하기</p>
                        <div className="relative w-[90%] flex justify-start items-center my-[0.4vw]">
                            <p className="w-[40%] text-[1.6vw]">제목 수정 : </p>
                            <input
                                className="w-[60%] border-[0.2vw] border-white px-[1vw] py-[0.4vw] mx-[1vw]"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="relative w-[90%] flex justify-start items-center my-[0.4vw]">
                            <p className="w-[40%] text-[1.6vw]">
                                비밀번호 수정 :{' '}
                            </p>
                            <input
                                className="w-[60%] border-[0.2vw] border-white px-[1vw] py-[0.4vw] mx-[1vw]"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                    </div>

                    <div className="relative w-[90%] flex justify-between items-center my-[1vw]">
                        <p
                            className="w-[30%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-white cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
                            onClick={() => {
                                changeSettingRoomFlag();
                            }}
                        >
                            <p className="text-[1.4vw]">수정하기</p>
                        </p>
                        <p
                            className="w-[30%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-white cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
                            onClick={() => {
                                changeSettingRoomFlag();
                            }}
                        >
                            <p className="text-[1.4vw]">취소</p>
                        </p>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
}
