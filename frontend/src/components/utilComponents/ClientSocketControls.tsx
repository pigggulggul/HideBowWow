import { useEffect } from 'react';
import { socket } from '../../sockets/clientSocket';
import { useRecoilState } from 'recoil';
import { MeAtom, PlayerAtom } from '../../store/PlayersAtom';
import { CurrentPlayersInfo, MeInfo } from '../../types/GameType';

export function ClientSocketControls() {
    const [me, setMe] = useRecoilState(MeAtom);
    const [players, setPlayers] = useRecoilState(PlayerAtom);
    const handleConnect = () => {
        console.log('연결됨');
    };
    const handleDisconnect = () => {
        console.log('연결이 끊김');
    };
    const handleInitialize = (value: any) => {
        console.log('value', value);
        setMe(value);
        console.log('초기화됨');
    };
    const handleEnter = () => {
        console.log('입장함');
    };
    const handleExit = () => {
        console.log('퇴장함');
    };
    const handlePlayers = (value: CurrentPlayersInfo[]) => {
        setPlayers(value);
        const newMe = value.find((p) => p && me && p.id == me.id);

        if (newMe) {
            setMe(newMe);
        }
        console.log('플레이어 관련 이벤트');
    };
    const handleNewText = () => {
        console.log('새로운 텍스트됨');
    };

    useEffect(() => {
        socket.on('connect', handleConnect);
        socket.on('disconnect', handleDisconnect);
        socket.on('initialize', handleInitialize);
        socket.on('enter', handleEnter);
        socket.on('exit', handleExit);
        socket.on('players', handlePlayers);
        socket.on('newText', handleNewText);

        return () => {
            socket.off('connect', handleConnect);
            socket.off('disconnect', handleDisconnect);
            socket.off('initialize', handleInitialize);
            socket.off('enter', handleEnter);
            socket.off('exit', handleExit);
            socket.off('players', handlePlayers);
            socket.off('newText', handleNewText);
        };
    }, []);
    return null;
}
