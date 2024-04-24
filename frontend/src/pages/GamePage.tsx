import { RecoilRoot, useRecoilValue } from 'recoil';
import { ClientSocketControls } from '../components/utilComponents/ClientSocketControls';
import { Content } from '../components/content/Content';
import { socket } from '../sockets/clientSocket';
import { RoomAtom } from '../store/PlayersAtom';

export default function GamePage() {
    return (
        <RecoilRoot>
            <Content />
            <ClientSocketControls />
            <div className="absolute flex top-1 right-1 ">
                <p
                    className="bg-white border-[0.4vw] rounded-[0.6vw] px-[2vw] py-[1vw] border-gray-700 cursor-pointer"
                    onClick={() => {
                        {
                            socket.emit('roundStart');
                        }
                    }}
                >
                    라운드 시작
                </p>
                <p
                    className=" ms-[1vw] bg-white border-[0.4vw] rounded-[0.6vw] px-[2vw] py-[1vw] border-gray-700 cursor-pointer"
                    onClick={() => {
                        {
                            socket.emit('roundFinish');
                        }
                    }}
                >
                    라운드 끝
                </p>
            </div>
        </RecoilRoot>
    );
}
