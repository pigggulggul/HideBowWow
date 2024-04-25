import { RecoilRoot, useRecoilValue } from 'recoil';
import { ClientSocketControls } from '../components/utilComponents/ClientSocketControls';
import { Content } from '../components/content/Content';
import { socket } from '../sockets/clientSocket';
import { RoomAtom } from '../store/PlayersAtom';
import { useDispatch, useSelector } from 'react-redux';

export default function GamePage() {
    const meInfo = useSelector(
        (state: any) => state.reduxFlag.userSlice.meInfo
    );
    const isReady = useSelector(
        (state: any) => state.reduxFlag.userSlice.isReady
    );
    const currentRoom = useSelector(
        (state: any) => state.reduxFlag.userSlice.currentRoom
    );
    const dispatch = useDispatch();
    return (
        <RecoilRoot>
            <Content />
            <ClientSocketControls />
            {currentRoom.roomState === 1 ? (
                <div className="absolute flex top-1 w-full justify-center">
                    <p className="text-[2vw]">
                        대기중 : {currentRoom.roomTime}
                    </p>
                </div>
            ) : (
                <></>
            )}
            {currentRoom.roomState === 2 ? (
                <div className="absolute flex top-1 w-full justify-center">
                    <p className="text-[2vw]">
                        숨는 시간 : {currentRoom.roomTime}
                    </p>
                </div>
            ) : (
                <></>
            )}
            {currentRoom.roomState === 3 ? (
                <div className="absolute flex top-1 w-full justify-center">
                    <p className="text-[2vw]">
                        찾는 시간 : {currentRoom.roomTime}
                    </p>
                </div>
            ) : (
                <></>
            )}
            {currentRoom.roomState === 4 ? (
                <div className="absolute flex top-1 w-full justify-center">
                    <p className="text-[2vw]">
                        술래 승리 : {currentRoom.roomTime}
                    </p>
                </div>
            ) : (
                <></>
            )}
            {currentRoom.roomState === 5 ? (
                <div className="absolute flex top-1 w-full justify-center">
                    <p className="text-[2vw]">
                        도망자 승리 : {currentRoom.roomTime}
                    </p>
                </div>
            ) : (
                <></>
            )}
            {meInfo.isSeeker ? (
                <div className="absolute flex left-1 bottom-1">
                    <p className="text-[2vw]">💙</p>
                    <p className="text-[2vw]">💙</p>
                    <p className="text-[2vw]">💙</p>
                    <p className="text-[2vw]">💙</p>
                    <p className="text-[2vw]">💙</p>
                </div>
            ) : (
                <></>
            )}
            {!meInfo.isSeeker ? (
                <div className="absolute flex left-1 bottom-1">
                    <p className="text-[2vw]">💙</p>
                </div>
            ) : (
                <></>
            )}
        </RecoilRoot>
    );
}
