import { Link } from 'react-router-dom';

export default function SelectChannelPage() {
    return (
        <section
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
                backgroundImage:
                    'url(/src/assets/images/bg/background-main.png)',
            }}
        >
            <div className="w-[80%] h-[90%] flex flex-col items-center border-[0.3vw] rounded-[0.6vw] border-white bg-gray-400 bg-opacity-60 overflow-y-auto">
                <p className="text-[2.4vw] my-[2vw]">채널 선택</p>
                <div className="w-full h-full flex flex-wrap justify-between content-start px-[8vw] overflow-y-auto">
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">1 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">2 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">3 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">4 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">5 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">6 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">7 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">8 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">9 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                    <Link
                        to={'/lobby'}
                        className="w-[40%] h-[20%] px-[1.6vw] my-[1vw] flex justify-between items-center border-[0.3vw] rounded-[0.6vw] border-white bg-sky-300 cursor-pointer hover:bg-sky-500 "
                    >
                        <p className="text-[1.8vw]">10 채널</p>
                        <p className="text-[1.6vw]">100/100</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
