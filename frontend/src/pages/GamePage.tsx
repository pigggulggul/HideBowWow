import { RecoilRoot } from 'recoil';
import { Content } from '../components/content/Content';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatType, CurrentPlayersInfo } from '../types/GameType';
import { heartState } from '../store/user-slice';
import StompClient from '../websocket/StompClient';
import { startRecording, stopRecording } from '../assets/js/voice';
import winnerSeeker from '../assets/images/icon/winner_seeker.png';
import winnerHider from '../assets/images/icon/winner_hider.png';
import keyA from '../assets/images/icon/key_a.png';
import keyD from '../assets/images/icon/key_d.png';
import keyE from '../assets/images/icon/key_e.png';
import keyMouseleft from '../assets/images/icon/key_mouseleft.png';
import keyQ from '../assets/images/icon/key_q.png';
import keyS from '../assets/images/icon/key_s.png';
import keyW from '../assets/images/icon/key_w.png';

export default function GamePage() {
    const stompClient = StompClient.getInstance();
    const meInfo = useSelector(
        (state: any) => state.reduxFlag.userSlice.meInfo
    );

    const currentRoom = useSelector(
        (state: any) => state.reduxFlag.userSlice.currentRoom
    );
    const meHeart = useSelector(
        (state: any) => state.reduxFlag.userSlice.meHeart
    );
    const bgmSetting = useSelector(
        (state: any) => state.reduxFlag.userSlice.bgmFlag
    );

    const chatList = useSelector(
        (state: any) => state.reduxFlag.userSlice.chatData
    );

    const [seekerNum, setSeekerNum] = useState<number>(0);
    const [hiderNum, setHiderNum] = useState<number>(0);

    const [playing, setPlaying] = useState<boolean>(false);
    const [audio] = useState(new Audio('../src/assets/bgm/ingame_music.mp3'));

    const [toggleChat, setToggleChat] = useState<boolean>(false);

    const [chatContent, setChatContent] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);
    //스크롤 탐지용
    const messageEndRef = useRef<HTMLDivElement>(null);
    // BGM 설정
    useEffect(() => {
        setPlaying(bgmSetting);
    }, [playing, bgmSetting]);
    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, audio]);
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentRoom.roomState === 0) {
            audio.pause();
            document.exitPointerLock();
            navigate(`/room/${currentRoom.roomId}`, {
                state: currentRoom.roomId,
            });
        }
    }, [currentRoom.roomState]);
    useEffect(() => {
        let seeker = 0;
        let hider = 0;
        currentRoom.roomPlayers.map((item: CurrentPlayersInfo) => {
            if (item.isSeeker && !item.isDead) {
                seeker++;
            } else if (!item.isSeeker && !item.isDead) {
                hider++;
            }
            setSeekerNum(seeker);
            setHiderNum(hider);
        });
    }, [currentRoom.roomPlayers]);
    useEffect(() => {
        if (meInfo) {
            if (meInfo.isSeeker) {
                console.log('헤헤');
                dispatch(heartState(5));
            } else {
                dispatch(heartState(1));
            }
        }
    }, [meInfo.isSeeker]);
    useEffect(() => {
        if (meHeart === 0) {
            stompClient.sendMessage(
                `/player.dead`,
                JSON.stringify({
                    type: 'player.enter',
                    roomId: currentRoom.roomId,
                    sender: meInfo.nickname,
                    data: {
                        nickname: meInfo.nickname,
                        isDead: true,
                    },
                })
            );
        }
    }, [meHeart]);
    useEffect(() => {
        if (toggleChat) {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        } else {
            if (inputRef.current && chatContent !== '') {
                console.log('보낼게염');
                stompClient.sendMessage(
                    `/chat.player`,
                    JSON.stringify({
                        type: 'chat.player',
                        roomId: currentRoom.roomId,
                        sender: meInfo.nickname,
                        data: {
                            nickname: meInfo.nickname,
                            content: chatContent,
                        },
                    })
                );
                setChatContent('');

                inputRef.current.blur();
            }
        }
    }, [toggleChat]);
    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [chatList]);
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
            e.returnValue =
                '새로고침시 게임이 나가집니다. 페이지를 떠나시겠습니까?';
        };

        const handleKeyDown = (event: any) => {
            if (event.key === 'Enter') {
                setToggleChat((prev) => !prev);
            }
        };
        // 이벤트 리스너 추가
        window.addEventListener('beforeunload', handleBeforeUnload);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <RecoilRoot>
            <Content />
            {currentRoom.roomState === 1 ? (
                <div className="absolute flex top-4 w-full justify-center items-center text-[2vw]">
                    <p className=" text-sky-400">술래</p>
                    <p className=" text-sky-400 ms-[1vw]">{seekerNum}</p>
                    <p className="px-[2vw]">
                        대기 시간 : {currentRoom.roomTime}
                    </p>
                    <p className=" text-orange-400">도망자</p>
                    <p className=" text-orange-400 ms-[1vw]">{hiderNum}</p>
                </div>
            ) : (
                <></>
            )}
            {currentRoom.roomState === 2 ? (
                <div className="absolute flex top-4 w-full justify-center">
                    <p className="text-[2vw]">
                        숨는 시간 : {currentRoom.roomTime}
                    </p>
                </div>
            ) : (
                <></>
            )}
            {currentRoom.roomState === 3 ? (
                <div className="absolute flex top-4 w-full justify-center">
                    <p className="text-[2vw]">
                        남은 시간 : {currentRoom.roomTime}
                    </p>
                </div>
            ) : (
                <></>
            )}
            {currentRoom.roomState === 4 ? (
                <div className="absolute flex flex-col items-center justify-center">
                    <img src={winnerSeeker} alt="" />
                    <p className="text-[2vw] text-black">
                        {currentRoom.roomTime}초 후 로비로 복귀합니다.
                    </p>
                </div>
            ) : (
                <></>
            )}
            {currentRoom.roomState === 5 ? (
                <div className="absolute flex flex-col items-center justify-center">
                    <img src={winnerHider} alt="" />
                    <p className="text-[2vw] text-black">
                        {currentRoom.roomTime}초 후 로비로 복귀합니다.
                    </p>
                </div>
            ) : (
                <></>
            )}
            {meInfo.isSeeker ? (
                <div className="absolute flex left-1 bottom-1">
                    {Array.from({ length: meHeart }).map((_, i) => (
                        <p className="text-[2vw]" key={i}>
                            💖
                        </p>
                    ))}
                </div>
            ) : (
                <></>
            )}
            {!meInfo.isSeeker ? (
                <div className="absolute flex left-1 bottom-1">
                    <p className="text-[2vw]">💖</p>
                </div>
            ) : (
                <></>
            )}
            {meInfo.isSeeker ? (
                <div className="absolute w-full h-full flex justify-center items-center">
                    <p className="w-[10px] h-[10px] rounded-full bg-black"></p>
                </div>
            ) : (
                <></>
            )}
            <div className="absolute flex flex-col top-1 left-1 w-[20%] h-[40%] bg-black bg-opacity-20 p-[0.4vw]">
                <div className="flex items-center">
                    <img className="px-[0.2vw]" src={keyW} alt="" />
                    <img className="px-[0.2vw]" src={keyA} alt="" />
                    <img className="px-[0.2vw]" src={keyS} alt="" />
                    <img className="px-[0.2vw]" src={keyD} alt="" />
                    <p className="px-[0.4vw] text-[1.6vw]">이동</p>
                </div>
                {meInfo.isSeeker ? (
                    <>
                        <div className="flex items-center my-[1vw]">
                            <img
                                className="px-[0.2vw]"
                                src={keyMouseleft}
                                alt=""
                            />
                            <p className="px-[0.4vw] text-[1.6vw]">공격</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center my-[1vw]">
                            <img className="px-[0.2vw]" src={keyQ} alt="" />
                            <p className="px-[0.4vw] text-[1.6vw]">회전 (좌)</p>
                        </div>
                        <div className="flex items-center">
                            <img className="px-[0.2vw]" src={keyE} alt="" />
                            <p className="px-[0.4vw] text-[1.6vw]">회전 (우)</p>
                        </div>
                    </>
                )}
            </div>

            <div
                className={
                    'absolute flex flex-col bottom-20 left-1 w-[30%] h-[30%]  p-[0.4vw] overflow-auto '
                }
                style={
                    toggleChat
                        ? { backgroundColor: 'rgba(0,0,0,0.1)', opacity: 10 }
                        : {}
                }
            >
                <div className="w-[full] h-[90%] p-[0.4vw] overflow-auto">
                    {chatList.map((item: ChatType, index: number) => {
                        return (
                            <div
                                className="w-full flex items-center justify-start my-1"
                                key={'chat key : ' + index}
                            >
                                <p className="w-[20%]">{item.nickname} :</p>
                                <p className="w-[80%] text-start">
                                    {item.content}
                                </p>
                            </div>
                        );
                    })}
                    <div ref={messageEndRef}></div>
                </div>
                <input
                    ref={inputRef}
                    className="w-[full] h-[10%] p-[0.4vw] overflow-auto"
                    value={chatContent}
                    onChange={(e) => {
                        setChatContent(e.target.value);
                    }}
                    style={
                        toggleChat
                            ? { visibility: 'visible' }
                            : { visibility: 'hidden' }
                    }
                />
            </div>
            <div className="absolute flex top-1 w-full justify-end">
                <button
                    onClick={() => {
                        stompClient.enterVoiceChannel(
                            currentRoom.roomId,
                            meInfo.nickname
                        );
                    }}
                >
                    음성채널 입장
                </button>{' '}
                &nbsp;&nbsp;
                <button
                    onClick={() => {
                        stompClient.exitVoiceChannel();
                    }}
                >
                    음성채널 퇴장
                </button>{' '}
                &nbsp;&nbsp;
                <button
                    onClick={() => {
                        startRecording();
                    }}
                >
                    마이크 ON
                </button>{' '}
                &nbsp;&nbsp;
                <button
                    onClick={() => {
                        stopRecording();
                    }}
                >
                    마이크 OFF
                </button>{' '}
                &nbsp;&nbsp;
            </div>
        </RecoilRoot>
    );
}
