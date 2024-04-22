import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RoomPage() {
    const [settingRoomFlag, setSettingRoomFlag] = useState<boolean>(false);

    const changeSettingRoomFlag = () => {
        setSettingRoomFlag(!settingRoomFlag);
    };
    return (
        <section
            className="relative w-full h-full flex flex-col items-center justify-center"
            style={{
                backgroundImage:
                    'url(/src/assets/images/bg/background-main.png)',
            }}
        >
            <div className="relative w-[80%] h-[90%] p-[1vw] flex justify-between border-[0.3vw] rounded-[0.6vw] border-gray-950 bg-white ">
                <div className="w-[60%] h-full flex-col justify-center">
                    <div className="w-full h-[14%] flex justify-between items-center mx-auto my-[1vw] px-[1vw] py-[1.2vw] text-[1.2vw] border-[0.2vw] border-gray-950 rounded-[0.6vw] ">
                        <p>1.아무나 와라</p>
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
                        <div className="w-[45%] h-[15%] px-[1vw] my-[0.6vw] mx-[0.4vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-black bg-white cursor-pointer hover:bg-sky-500 ">
                            <p className="text-[1.4vw]">정은수</p>
                            <div className="flex flex-col">
                                <p className="text-[1.6vw]">방장</p>
                            </div>
                        </div>
                        <div className="w-[45%] h-[15%] px-[1vw] my-[0.6vw] mx-[0.4vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-black bg-white cursor-pointer hover:bg-sky-500 ">
                            <p className="text-[1.4vw]">이제헌</p>
                            <div className="flex flex-col">
                                <p className="text-[1.6vw]"></p>
                            </div>
                        </div>
                        <div className="w-[45%] h-[15%] px-[1vw] my-[0.6vw] mx-[0.4vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-black bg-white cursor-pointer hover:bg-sky-500 ">
                            <p className="text-[1.4vw]">최창호</p>
                            <div className="flex flex-col">
                                <p className="text-[1.6vw]"></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[40%] h-full flex flex-col items-center justify-around">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-[80%] border-[0.3vw] border-black rounded-[0.6vw]"
                            src="/src/assets/images/etc/dummy-map.png"
                            alt=""
                            style={{ aspectRatio: 1 / 1 }}
                        />
                        <div className="flex text-[2vw]">
                            <p className="mx-[1vw]">-</p>
                            <p>농장</p>
                            <p className="mx-[1vw]">+</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-between">
                        <Link
                            to={'/lobby'}
                            className="w-[45%] h-full px-[1vw] bg-red-400  py-[1vw] border-[0.3vw] rounded-[0.6vw] border-black cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 "
                        >
                            <p className="text-[1.4vw]">나가기</p>
                        </Link>
                        <Link
                            to={'/game'}
                            className="w-[45%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-black cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
                        >
                            <p className="text-[1.4vw]">게임시작</p>
                        </Link>
                    </div>
                </div>
            </div>
            {settingRoomFlag ? (
                <div className="absolute w-[40%] h-[40%] flex flex-col items-center justify-between border-[0.3vw] rounded-[0.6vw] border-gray-950 bg-white overflow-y-auto">
                    <div className="w-full flex flex-col items-center">
                        <p className="text-[1.8vw] my-[1vw]">방 수정하기</p>
                        <div className="relative w-[90%] flex justify-start items-center my-[0.4vw]">
                            <p className="w-[40%] text-[1.6vw]">제목 수정 : </p>
                            <input
                                className="w-[60%] border-[0.2vw] border-black px-[1vw] py-[0.4vw] mx-[1vw]"
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
                                changeSettingRoomFlag();
                            }}
                        >
                            <p className="text-[1.4vw]">수정하기</p>
                        </p>
                        <p
                            className="w-[30%] h-full px-[1vw] py-[1vw] border-[0.3vw] rounded-[0.6vw] border-black cursor-pointer hover:bg-sky-500 hover:text-white hover:border-sky-500"
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
