import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { PlayerAtom } from '../../../../../store/PlayersAtom';
import {
    BufferGeometry,
    Line,
    LineBasicMaterial,
    Vector2,
    Vector3,
} from 'three';
import { socket } from '../../../../../sockets/clientSocket';
import { useSelector } from 'react-redux';
import { CurrentPlayersInfo } from '../../../../../types/GameType';
import { useThree } from '@react-three/fiber';
import StompClient from '../../../../../websocket/StompClient';

export function AttackRules() {
    const [detectedObject, setDetectedObject] = useState<any>(null);
    const [rayVisual, setRayVisual] = useState<any>(null); // 레이 시각화 객체 상태
    const stompClient = StompClient.getInstance();
    const { camera, scene, raycaster, gl } = useThree();
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
    }, [players, rayVisual]);

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
                drawRayLine(camera.position, intersects[0].point); // 레이를 그리는 함수 호출
                currentRoom.roomPlayers.map((item: CurrentPlayersInfo) => {
                    if (item.nickname === closestObject.parent?.name) {
                        console.log(
                            '죽인다 빵야빵야',
                            closestObject.parent?.name
                        );
                        stompClient.sendMessage(
                            `/player.dead`,
                            JSON.stringify({
                                type: 'player.enter',
                                roomId: currentRoom.roomId,
                                sender: closestObject.parent?.name,
                                data: {
                                    nickname: closestObject.parent?.name,
                                    isDead: true,
                                },
                            })
                        );
                    }
                });
                // closestObject.parent?.name 지준영
            }
        }
    };
    const drawRayLine = (start: any, end: any) => {
        // 라인 재료와 지오메트리 생성
        const material = new LineBasicMaterial({
            color: 0xff0000,
        });
        const points = [start, end];
        const geometry = new BufferGeometry().setFromPoints(points);

        // 기존 라인이 있으면 씬에서 제거
        if (rayVisual) scene.remove(rayVisual);

        // 새로운 라인 생성
        const line = new Line(geometry, material);
        scene.add(line);
        setRayVisual(line);
    };
    return <></>;
}
