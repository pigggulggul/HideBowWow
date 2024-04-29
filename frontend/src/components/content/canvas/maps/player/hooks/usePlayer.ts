import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    AnimationClip,
    Bone,
    Group,
    MeshStandardMaterial,
    SkinnedMesh,
    Vector3,
} from 'three';
import { GLTF, SkeletonUtils } from 'three-stdlib';
import { PlayerInitType } from '../../../../../../types/GameType';
import StompClient from '../../../../../../websocket/StompClient';
import { useSelector } from 'react-redux';
import { useBox } from '@react-three/cannon';

interface GLTFAction extends AnimationClip {
    name: ActionName;
}
type GLTFResult = GLTF & {
    nodes: {
        Character: SkinnedMesh;
        Root: Bone;
    };
    materials: {
        Atlas: MeshStandardMaterial;
        'Atlas.001'?: MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

interface PlayerRef extends Group {
    viewUpDown?: number;
}

type ActionName =
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Death'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Duck'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|HitReact'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Idle'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Idle_Attack'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Idle_Hold'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Jump'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Jump_Idle'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Jump_Land'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|No'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Punch'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Run'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Run_Attack'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Run_Hold'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Walk'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Walk_Hold'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Wave'
    | 'CharacterArmature|CharacterArmature|CharacterArmature|Yes';

/** 플레이어의 행동과 모델을 제어한다 */
export const usePlayer = ({ player, position, modelIndex }: PlayerInitType) => {
    const [isWalking, setIsWalking] = useState(false);
    // const camera = useRef<ThreePerspectiveCamera>(null);
    const keyState = useRef<{ [key: string]: boolean }>({});

    // Redux
    const playerNickname = player?.nickname;
    const meName = useSelector(
        (state: any) => state.reduxFlag.userSlice.userNickname
    );
    const meInfo = useSelector(
        (state: any) => state.reduxFlag.userSlice.meInfo
    );
    const roomId = useSelector(
        (state: any) => state.reduxFlag.userSlice.roomId
    );
    const roomState = useSelector(
        (state: any) => state.reduxFlag.userSlice.currentRoom
    );

    const stompClient = StompClient.getInstance();

    const memoizedPosition = useMemo(() => position, []);
    const playerRef = useRef<PlayerRef>(null);
    const nicknameRef = useRef<Group>(null);

    const { scene, materials, animations } = useGLTF(
        (() => {
            switch (modelIndex) {
                case 0:
                    return '/models/CubeGuyCharacter.glb';
                case 1:
                    return '/models/CubeWomanCharacter.glb';
                case 2:
                    return '/models/Steve.glb';
                default:
                    return '';
            }
        })()
    ) as GLTFResult;

    //개별 모델링을 통하여 다른 객체임을 알려줘야한다.
    const clone = useMemo(() => SkeletonUtils.clone(scene), []);

    const objectMap = useGraph(clone);
    const nodes = objectMap.nodes;

    const [animation, setAnimation] = useState<ActionName>(
        'CharacterArmature|CharacterArmature|CharacterArmature|Idle'
    );
    const { actions } = useAnimations(animations, playerRef);

    const lockPointer = () => {
        const element = document.body;
        const requestPointerLock = element.requestPointerLock;
        requestPointerLock.call(element);
    };
    // const unlockPointer = () => {
    //     document.exitPointerLock();
    // };

    // lockPointer();
    // unlockPointer();
    const [boxRef, boxApi] = useBox(() => ({
        mass: 0,
        args: [1, 1, 1],
        // angularFactor: [0, 0, 0],
        position: [position.x, position.y + 1, position.z], // 초기 위치를 useRef의 현재 값으로 설정
    }));

    // useRef에 직접 할당 대신, useEffect를 사용하여 ref를 동기화합니다.

    const updateRotationX = (movementY: number) => {
        const rotationAmount = movementY * 0.001; // 회전 속도 조절을 위해 상수를 곱합니다.

        if (playerRef.current) {
            // 최대 최소값을 설정하여 너무 높거나 낮지 않도록 제한합니다.
            const maxRotationX = Math.PI / 4; // 45도
            const minRotationX = -Math.PI / 4; // -45도
            if (playerRef.current.viewUpDown) {
                playerRef.current.viewUpDown = Math.max(
                    minRotationX,
                    Math.min(
                        maxRotationX,
                        playerRef.current.viewUpDown - rotationAmount
                    )
                );
            } else {
                playerRef.current.viewUpDown = playerRef.current.rotation.x;
                playerRef.current.viewUpDown = Math.max(
                    minRotationX,
                    Math.min(
                        maxRotationX,
                        playerRef.current.viewUpDown - rotationAmount
                    )
                );
            }
        }
    };

    const updateRotationY = (movementX: number) => {
        const rotationAmount = movementX * 0.0013; // 회전 속도 조절을 위해 상수를 곱합니다.

        if (playerRef.current) {
            playerRef.current.rotation.y -= rotationAmount;
        }
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // 마우스 포인터가 고정된 상태에서의 마우스 이동량을 감지합니다.
            if (meInfo?.nickname === playerNickname) {
                const movementX = event.movementX || 0;
                const movementY = event.movementY || 0;
                updateRotationY(movementX);
                updateRotationX(movementY);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // 이동
    useEffect(() => {
        if (isWalking) {
            lockPointer();
            actions[animation]?.reset().fadeIn(0.2).play();
        }
        return () => {
            actions[animation]?.fadeOut(0.5);
        };
    }, [isWalking, animation, actions]);

    // 키 입력
    useEffect(() => {
        const handleKeyDown = (event: any) => {
            keyState.current[event.key] = true;
        };

        const handleKeyUp = (event: any) => {
            keyState.current[event.key] = false;
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [isWalking]);

    // Frame
    useFrame(({ camera }) => {
        if (!player || !playerRef.current) return;

        if (meInfo?.nickname === playerNickname) {
            // 내 캐릭터의 경우
            // console.log('!!! ' + JSON.stringify(roomState.roomPlayers));
            const moveVector = new Vector3(
                (keyState.current['a'] ? 1 : 0) -
                    (keyState.current['d'] ? 1 : 0),
                0,
                (keyState.current['s'] ? 1 : 0) -
                    (keyState.current['w'] ? 1 : 0)
            );

            if (!moveVector.equals(new Vector3(0, 0, 0))) {
                // 이동중
                moveVector.normalize().multiplyScalar(0.2); // 속도조절
                setIsWalking(true);
                setAnimation(
                    'CharacterArmature|CharacterArmature|CharacterArmature|Run'
                );
                // 캐릭터가 바라보는 방향으로 이동 벡터를 회전시킵니다.
                const forward = new Vector3(0, 0, -1).applyQuaternion(
                    playerRef.current.quaternion
                );
                const moveDirection = forward
                    .clone()
                    .multiplyScalar(moveVector.z)
                    .add(
                        new Vector3(-forward.z, 0, forward.x).multiplyScalar(
                            moveVector.x
                        )
                    );
                // api.velocity.set(
                //     moveDirection.x,
                //     moveDirection.y,
                //     moveDirection.z
                // );
                playerRef.current.position.add(moveDirection);

                if (!moveVector.equals(new Vector3(0, 0, 0))) {
                    console.log(
                        '허허',
                        playerRef.current.position.x,
                        playerRef.current.position.y,
                        playerRef.current.position.z
                    );
                    boxApi.position.set(
                        ...playerRef.current.position.toArray()
                    ); // 물리 바디의 속도를 업데이트
                    console.log(boxRef.current?.position);
                }
                // console.log('me Name (Player)=> ' + meName);
                stompClient.sendMessage(
                    `/player.move`,
                    JSON.stringify({
                        type: 'player.move',
                        roomId: roomId,
                        sender: meName,
                        data: {
                            nickname: meName,
                            position: [
                                playerRef.current.position.x,
                                playerRef.current.position.y,
                                playerRef.current.position.z,
                            ],
                            direction: [
                                moveDirection.x,
                                moveDirection.y,
                                moveDirection.z,
                            ],
                        },
                    })
                );
            } else {
                setIsWalking(false);
                setAnimation(
                    'CharacterArmature|CharacterArmature|CharacterArmature|Idle'
                );
            }

            // 카메라 설정
            const playerPosition = playerRef.current.position.clone();
            playerPosition.setY(+3);

            const playerDirection = new Vector3( // 플레이어가 바라보는 곳
                Math.sin(playerRef.current.rotation.y),
                playerRef.current.viewUpDown, // 아래 위
                Math.cos(playerRef.current.rotation.y)
            );

            camera.position.set(
                playerPosition.x + playerDirection.x,
                playerPosition.y,
                playerPosition.z + playerDirection.z
            );
            const cameraTarget = playerPosition
                .clone()
                .add(playerDirection.multiplyScalar(3));
            camera.lookAt(cameraTarget); // 정면보다 더 앞으로 설정!
            camera.zoom = 0.6;
            camera.updateProjectionMatrix();
        } else {
            // 다른 플레이어의 캐릭터
            roomState.roomPlayers.forEach((otherPlayer: any) => {
                if (
                    otherPlayer.nickname !== meInfo?.nickname &&
                    otherPlayer.isSeeker === true
                ) {
                    const otherPlayerRef = playerRef.current;
                    otherPlayerRef?.position.set(
                        otherPlayer.position[0],
                        otherPlayer.position[1],
                        otherPlayer.position[2]
                    );
                    // 회전 로직을 추가해야 할 수도 있습니다.
                }
            });
        }

        if (nicknameRef.current) {
            nicknameRef.current.position.set(
                playerRef.current.position.x,
                playerRef.current.position.y + 3.5,
                playerRef.current.position.z
            );
            nicknameRef.current.lookAt(10000, 10000, 10000);
        }
    });

    return {
        meInfo,
        playerRef,
        memoizedPosition,
        playerNickname,
        nodes,
        materials,
        nicknameRef,
    };
};
