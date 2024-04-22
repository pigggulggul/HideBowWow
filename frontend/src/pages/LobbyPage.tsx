import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LobbyPage() {
    const [makeRoomFlag, setMakeRoomFlag] = useState<boolean>(false);
    const [searchRoomFlag, setSearchRoomFlag] = useState<boolean>(false);

    const changeMakeRoomFlag = () => {
        setMakeRoomFlag(!makeRoomFlag);
        setSearchRoomFlag(false);
    };
    const changeSearchRoomFlag = () => {
        setMakeRoomFlag(false);
        setSearchRoomFlag(!searchRoomFlag);
    };
    return (
        <section
            className="relative w-full h-full flex flex-col items-center justify-center"
            style={{
                backgroundImage:
                    'url(/src/assets/images/bg/background-main.png)',
            }}
        >
            <div className="relative w-[80%] h-[90%] flex justify-between border-[0.3vw] rounded-[0.6vw] border-gray-950 bg-white overflow-y-auto">
                <div className="w-[15%]">
                    <p className="w-[80%] mx-auto my-[1vw] px-[1vw] py-[1.2vw] text-[1.2vw] border-[0.2vw] border-gray-950 rounded-[0.6vw] hover:color-bg-main cursor-pointer">
                        빠른시작
                    </p>
                    <p
                        className="w-[80%] mx-auto my-[1vw] px-[1vw] py-[1.2vw] text-[1.2vw] border-[0.2vw] border-gray-950 rounded-[0.6vw] hover:color-bg-main cursor-pointer"
                        onClick={() => {
                            changeMakeRoomFlag();
                        }}
                    >
                        방 만들기
                    </p>
                    <p
                        className="w-[80%] mx-auto my-[1vw] px-[1vw] py-[1.2vw] text-[1.2vw] border-[0.2vw] border-gray-950 rounded-[0.6vw] hover:color-bg-main cursor-pointer"
                        onClick={() => {
                            changeSearchRoomFlag();
                        }}
                    >
                        방 찾기
                    </p>
                </div>
                <div className="w-[85%] h-full flex flex-wrap content-start overflow-y-auto">
                    <Link
                        to={'/room'}
                        className="w-[45%] h-[20%] px-[1vw] my-[0.6vw] mx-[0.4vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-black bg-white cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">1.아무나와라</p>
                        <div className="flex flex-col">
                            <p className="text-[1.6vw]">6/6</p>
                            <p className="text-[1.6vw] text-red-600">게임중</p>
                        </div>
                    </Link>
                    <Link
                        to={'/room'}
                        className="w-[45%] h-[20%] px-[1vw] my-[0.6vw] mx-[0.4vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-black bg-white cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">1.아무나와라</p>
                        <div className="flex flex-col">
                            <p className="text-[1.6vw]">6/6</p>
                            <p className="text-[1.6vw] text-red-600">게임중</p>
                        </div>
                    </Link>
                    <Link
                        to={'/room'}
                        className="w-[45%] h-[20%] px-[1vw] my-[0.6vw] mx-[0.4vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-black bg-white cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">1.아무나와라</p>
                        <div className="flex flex-col">
                            <p className="text-[1.6vw]">6/6</p>
                            <p className="text-[1.6vw] text-red-600">게임중</p>
                        </div>
                    </Link>
                    <Link
                        to={'/room'}
                        className="w-[45%] h-[20%] px-[1vw] my-[0.6vw] mx-[0.4vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-black bg-white cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">1.아무나와라</p>
                        <div className="flex flex-col">
                            <p className="text-[1.6vw]">6/6</p>
                            <p className="text-[1.6vw] text-red-600">게임중</p>
                        </div>
                    </Link>
                </div>
            </div>
            {makeRoomFlag ? (
                <div className="absolute w-[40%] h-[40%] flex flex-col items-center justify-between border-[0.3vw] rounded-[0.6vw] border-gray-950 bg-white overflow-y-auto">
                    <div className="w-full flex flex-col items-center">
                        <p className="text-[1.8vw] my-[1vw]">방 만들기</p>
                        <div className="relative w-[90%] flex justify-start items-center my-[0.4vw]">
                            <p className="w-[40%] text-[1.6vw]">방 이름 : </p>
                            <input
                                className="w-[60%] border-[0.2vw] border-black px-[1vw] py-[0.4vw] mx-[1vw]"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="relative w-[90%] flex justify-start items-center my-[0.4vw]">
                            <p className="w-[40%] text-[1.6vw]">
                                방 비밀번호 :{' '}
                            </p>
                            <input
                                className="w-[60%] border-[0.2vw] border-black px-[1vw] py-[0.4vw] mx-[1vw]"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                    </div>

                    <div className="relative w-[90%] flex justify-between items-center my-[1vw]">
                        <p
                            className="w-[30%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-black cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
                            onClick={() => {
                                changeMakeRoomFlag();
                            }}
                        >
                            <p className="text-[1.4vw]">방 만들기</p>
                        </p>
                        <p
                            className="w-[30%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-black cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
                            onClick={() => {
                                changeMakeRoomFlag();
                            }}
                        >
                            <p className="text-[1.4vw]">취소</p>
                        </p>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {searchRoomFlag ? (
                <div className="absolute w-[40%] h-[40%] flex flex-col items-center justify-between border-[0.3vw] rounded-[0.6vw] border-gray-950 bg-white overflow-y-auto">
                    <p className="text-[1.8vw] my-[1vw]">방 찾기</p>
                    <div className="relative w-[90%] flex justify-start items-center my-[0.4vw]">
                        <p className="w-[40%] text-[1.6vw]">방 번호 : </p>
                        <input
                            className="w-[60%] border-[0.2vw] border-black px-[1vw] py-[0.4vw] mx-[1vw]"
                            type="text"
                            name=""
                            id=""
                        />
                    </div>

                    <div className="relative w-[90%] flex justify-between items-center my-[1vw]">
                        <p
                            className="w-[40%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-black cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
                            onClick={() => {
                                changeSearchRoomFlag();
                            }}
                        >
                            <p className="text-[1.4vw]">방 입장하기</p>
                        </p>
                        <p
                            className="w-[40%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-black cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
                            onClick={() => {
                                changeSearchRoomFlag();
                            }}
                        >
                            <p className="text-[1.4vw]">취소하기</p>
                        </p>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
}
