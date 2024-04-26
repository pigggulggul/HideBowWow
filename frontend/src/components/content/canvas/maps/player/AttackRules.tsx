import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { PlayerAtom } from '../../../../../store/PlayersAtom';
import { Vector2, Vector3 } from 'three';
import { socket } from '../../../../../sockets/clientSocket';
import { useSelector } from 'react-redux';
import { CurrentPlayersInfo } from '../../../../../types/GameType';
import { useThree } from '@react-three/fiber';

export function AttackRules() {
    const [detectedObject, setDetectedObject] = useState<any>(null);
    const { camera, scene, raycaster } = useThree();
    const currentRoom = useSelector(
        (state: any) => state.reduxFlag.userSlice.currentRoom
    );
    const meName = useSelector(
        (state: any) => state.reduxFlag.userSlice.userNickname
    );
    const [players, setPlayers] = useRecoilState(PlayerAtom);
    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.key === 'k') {
                handleInteraction();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [players]);

    const handleInteraction = () => {
        console.log('간다 공격!~');
        const newPlayers = currentRoom.roomPlayers.map(
            (player: CurrentPlayersInfo) => ({
                ...player,
                position: new Vector3(...player.position),
            })
        );
        const seeker = newPlayers.find(
            (p: CurrentPlayersInfo) => p.isSeeker && !p.isDead
        );
        console.log(seeker);

        if (seeker && seeker.nickname === meName) {
            const forwardPosition = new Vector3(
                seeker.position.x,
                seeker.position.y,
                seeker.position.z + 1
            );
            const forwardLayser = new Vector2(
                forwardPosition.x,
                forwardPosition.y
            );
            raycaster.setFromCamera(forwardLayser, camera);
            const intersects = raycaster.intersectObjects(scene.children, true);

            console.log(seeker.position);
            if (intersects.length > 0) {
                const closestObject = intersects[0].object;
                console.log('감지된 객체:', closestObject);
                setDetectedObject(closestObject);
            }
            // const target = newPlayers.find(
            //     (p: any) =>
            //         p.position.distanceTo(forwardPosition) < 2 &&
            //         !p.isSeeker &&
            //         !p.isDead
            // );

            // if (target) {
            //     target.isDead = true;
            //     console.log(`${target.id} is now dead.`);
            //     socket.emit('dead', target);
            //     const updatedPlayers = newPlayers.map((player) => ({
            //         ...player,
            //         position: [
            //             player.position.x,
            //             player.position.y,
            //             player.position.z,
            //         ], // Vector3에서 배열로 변환
            //     }));

            //     setPlayers(updatedPlayers);
            // }
        }
    };
    return <></>;
}
