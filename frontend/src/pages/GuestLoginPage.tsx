import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { guestLogin } from '../api/auth';
import { GuestLoginInfo } from '../types/GameType';
import { useDispatch } from 'react-redux';
import { userNicknameState } from '../store/user-slice';
import { httpStatusCode } from '../components/utils/http-status';

export default function GuestLoginPage() {
    const [guestNickname, setGuestNickname] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async () => {
        if (guestNickname === '') {
            alert('1글자 이상 입력해주세요.');
        } else {
            const guestLoginInfo: GuestLoginInfo = { nickname: guestNickname };

            const res = await guestLogin(guestLoginInfo);
            if (res.status === httpStatusCode.OK) {
                console.log('로그인 성공');
                dispatch(userNicknameState(guestLoginInfo.nickname));
                navigate('/selectchannel');
            } else {
                console.log('로그인 실패');
            }
        }
    };
    return (
        <section
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
                backgroundImage:
                    'url(/src/assets/images/bg/background-main.png)',
            }}
        >
            <p className="text-[2.4vw]">게스트 로그인</p>
            <div className="relative w-[50%] flex justify-between my-[2vw]">
                <h5 className="w-[35%] text-white text-[3vw]">닉네임</h5>
                <input
                    className="w-[65%] border-[0.3vw] color-border-main rounded-[0.6vw] px-[2vw] py-[0.4vw] text-black bg-white text-[2.6vw]"
                    type="text"
                    value={guestNickname}
                    onChange={(e) => {
                        setGuestNickname(e.target.value);
                    }}
                />
            </div>

            <div
                className="flex justify-center w-[40%] mt-[1vw]"
                onClick={() => {
                    login();
                }}
            >
                <div className="border-[0.3vw] color-border-main rounded-[0.6vw] px-[2vw] py-[0.4vw] color-text-main bg-white text-[2.6vw] cursor-pointer hover:color-bg-main hover:text-white">
                    Guest
                </div>
            </div>
        </section>
    );
}
