import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { PlayerAtom } from '../../../../../store/PlayersAtom';
import { Vector3 } from 'three';
import { socket } from '../../../../../sockets/clientSocket';

export function AttackRules() {
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
        const newPlayers = players.map((player) => ({
            ...player,
            position: new Vector3(...player.position),
        }));
        const seeker = newPlayers.find((p) => p.isSeeker && !p.isDead);
        console.log(seeker);
        if (seeker) {
            const forwardPosition = new Vector3(
                seeker.position.x,
                seeker.position.y,
                seeker.position.z + 1
            );
            console.log(seeker.position);
            const target = newPlayers.find(
                (p) =>
                    p.position.distanceTo(forwardPosition) < 2 &&
                    !p.isSeeker &&
                    !p.isDead
            );

            if (target) {
                target.isDead = true;
                console.log(`${target.id} is now dead.`);
                socket.emit('dead', target);
                const updatedPlayers = newPlayers.map((player) => ({
                    ...player,
                    position: [
                        player.position.x,
                        player.position.y,
                        player.position.z,
                    ], // Vector3에서 배열로 변환
                }));

                setPlayers(updatedPlayers);
            }
        }
    };
    return <></>;
}
