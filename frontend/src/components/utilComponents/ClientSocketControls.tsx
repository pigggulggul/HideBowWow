import { useEffect } from 'react';
import { socket } from '../../sockets/clientSocket';
import { useRecoilState } from 'recoil';
import { MeAtom, PlayerAtom, RoomAtom } from '../../store/PlayersAtom';
import { CurrentPlayersInfo, MeInfo } from '../../types/GameType';

export function ClientSocketControls() {
    const [me, setMe] = useRecoilState(MeAtom);
    const [players, setPlayers] = useRecoilState(PlayerAtom);
    const [room, setRoom] = useRecoilState(RoomAtom);
    useEffect(() => {
        console.log('등록', me);
    }, [me]);
    const handleConnect = () => {
        console.log('연결됨');
    };
    const handleDisconnect = () => {
        console.log('연결이 끊김');
    };
    const handleInitialize = (value: any) => {
        // console.log('value', value);
        if (value) {
            setMe(value);
            console.log('초기화됨');
        }
    };
    const handleEnter = () => {
        console.log('입장함');
    };
    const handleExit = () => {
        console.log('퇴장함');
    };
    const handleRoundStart = (value: any) => {
        console.log(value);
        setRoom(value);
        // console.log('라운드 시작됨');
    };
    const handleRoundFinish = (value: any) => {
        setRoom(value);
        console.log('라운드 끝남');
    };
    const handlePlayers = (value: CurrentPlayersInfo[]) => {
        setPlayers(value);
        console.log('value', value);
        console.log('me', me);
        const newMe = value.find((p) => p && me && p.id == me.id);
        // console.log(newMe);
        if (newMe) {
            console.log('me 초기화');
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
        socket.on('roundStart', handleRoundStart);
        socket.on('roundFinish', handleRoundFinish);

        return () => {
            socket.off('connect', handleConnect);
            socket.off('disconnect', handleDisconnect);
            socket.off('initialize', handleInitialize);
            socket.off('enter', handleEnter);
            socket.off('exit', handleExit);
            socket.off('players', handlePlayers);
            socket.off('newText', handleNewText);
            socket.off('roundStart', handleRoundStart);
            socket.off('roundFinish', handleRoundFinish);
        };
    }, [me]);
    return null;
}
