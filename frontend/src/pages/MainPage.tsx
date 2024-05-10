import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    collideObjectState,
    currentRoomState,
    readyState,
    roomIdState,
    userNicknameState,
} from '../store/user-slice';
import backgroundImage from '../assets/images/bg/background-main.png';
import textTitleSub from '../assets/images/text/text_title_sub.png';
import textTitle from '../assets/images/text/text_title.png';

export default function MainPage() {
    const dispatch = useDispatch();
    dispatch(readyState(false));
    dispatch(roomIdState(''));
    dispatch(userNicknameState(''));
    dispatch(
        currentRoomState({
            isPublic: true,
            roomId: '',
            roomMap: null,
            roomPassword: '',
            roomPlayers: [],
            roomState: null,
            roomTime: null,
            roomTitle: '',
        })
    );
    dispatch(collideObjectState([]));

    return (
        <section
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <img src={textTitleSub} alt="" />
            <img src={textTitle} alt="" />
            <div className="flex justify-center w-[40%]">
                <Link
                    to={'/guestlogin'}
                    className="border-[0.3vw] color-border-main rounded-[0.6vw] px-[2vw] py-[0.4vw] color-text-main bg-white text-[2.6vw] cursor-pointer hover:color-bg-main hover:text-white btn-animation"
                >
                    Guest
                </Link>
                {/* <Link
                    to={'/userlogin'}
                    className="border-[0.3vw] color-border-main rounded-[0.6vw] px-[2vw] py-[0.4vw] color-text-main bg-white text-[2.6vw] cursor-pointer hover:color-bg-main hover:text-white btn-animation"
                >
                    Login
                </Link> */}
            </div>
        </section>
    );
}
