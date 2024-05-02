import { useGLTF } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { Group, Mesh, MeshStandardMaterial, SkinnedMesh, Vector3 } from 'three';
import { GLTF, SkeletonUtils } from 'three-stdlib';
import { PlayerInitType } from '../../../../../../types/GameType';
import StompClient from '../../../../../../websocket/StompClient';
import { useSelector } from 'react-redux';
import { useBox } from '@react-three/cannon';

// interface GLTFAction extends AnimationClip {
//     name: ActionName;
// }
type GLTFResult = GLTF & {
    nodes: {
        Barrel_1: Mesh;
        Cabinet_18: Mesh;
        Chair_11: Mesh;
        Chair_4: Mesh;
        Toy_Pig_1: Mesh;
        Kitchen_Cabinet_4: Mesh;
        Washstand_2: Mesh;
        Kitchen_Cabinet_5: Mesh;
        Kitchen_Cabinet_6: Mesh;
        Ladder_1: Mesh;
        Shelf_4: Mesh;
        Table_5: Mesh;
        Ham_1: Mesh;
        Ham_2: Mesh;
        Pot_2: Mesh;
        Pot_1: Mesh;
        Fridge_2: Mesh;
        Table_13: Mesh;
    };
    materials: {
        ['Cartoon_Room_Mat.002']: MeshStandardMaterial;
    };
    animations: any[];
};

export const useObject = ({ player, position, modelIndex }: PlayerInitType) => {
    const playerNickname = player?.nickname;
    const keyState = useRef<{ [key: string]: boolean }>({});

    const stompClient = StompClient.getInstance();
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

    const memoizedPosition = useMemo(() => position, []);

    const playerRef = useRef<Group>(null);
    const nicknameRef = useRef<Group>(null);
    const { scene: scene_, materials } = useGLTF(
        (() => {
            switch (modelIndex) {
                case 0:
                    return '/models/object/Barrel.glb';
                case 1:
                    return '/models/object/Closet.glb';
                case 2:
                    return '/models/object/Chair_brown.glb';
                case 3:
                    return '/models/object/Chair_white.glb';
                case 4:
                    return '/models/object/Doll_pig.glb';
                case 5:
                    return '/models/object/Drawer_brown_1.glb';
                case 6:
                    return '/models/object/Drawer_brown_2.glb';
                case 7:
                    return '/models/object/Drawer_brown_3.glb';
                case 8:
                    return '/models/object/Drawer_brown_4.glb';
                case 9:
                    return '/models/object/Drawer_brown_5.glb';
                case 10:
                    return '/models/object/Ladder_brown.glb';
                case 11:
                    return '/models/object/Ladder_white.glb';
                case 12:
                    return '/models/object/LongTable_white.glb';
                case 13:
                    return '/models/object/Meet_full.glb';
                case 14:
                    return '/models/object/Meet_half.glb';
                case 15:
                    return '/models/object/Pot_orange.glb';
                case 16:
                    return '/models/object/Pot_pink.glb';
                case 17:
                    return '/models/object/Refrigerator.glb';
                case 18:
                    return '/models/object/RoundTable_brown.glb';
                case 19:
                    return '/models/object/Closet.glb';
                case 20:
                    return '/models/object/Closet.glb';
                case 20:
                    return '/models/object/Closet.glb';
                default:
                    return '/models/object/Closet.glb';
            }
        })()
    ) as GLTFResult;
    const getScaleByModelIndex = (index: number | undefined) => {
        const scaleValues: any = {
            0: 0.025,
            1: 0.025,
            2: 0.025,
            3: 0.025,
            4: 0.025,
            5: 0.025,
            6: 0.025,
            7: 0.025,
            8: 0.025,
            9: 0.025,
            10: 0.025,
            11: 0.025,
            12: 0.025,
            13: 0.025,
            14: 0.025,
            15: 0.025,
            16: 0.025,
            17: 0.025,
            18: 0.025,
            19: 0.025,
            20: 0.025,
        };
        if (index) {
            return scaleValues[index] || 1; // modelIndex에 해당하는 값이 없다면 기본값으로 1 사용
        } else {
            return -1;
        }
    };

    const scale = getScaleByModelIndex(modelIndex);

    //개별 모델링을 통하여 다른 객체임을 알려줘야한다.
    const scene = useMemo(() => {
        return SkeletonUtils.clone(scene_);
    }, []);
    const objectMap = useGraph(scene);
    const nodes = objectMap.nodes;
    const material = returnMaterial(modelIndex);
    const node = returnNode(modelIndex);

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
    }, []);

    useFrame(({ camera }) => {
        if (!player || !playerRef.current) return;

        if (meInfo?.nickname === playerNickname) {
            // 내 캐릭터의 경우
            const moveVector = new Vector3(
                (keyState.current['a'] ? 1 : 0) -
                    (keyState.current['d'] ? 1 : 0),
                0,
                (keyState.current['s'] ? 1 : 0) -
                    (keyState.current['w'] ? 1 : 0)
            );

            if (!moveVector.equals(new Vector3(0, 0, 0))) {
                moveVector.normalize().multiplyScalar(0.2);
            }

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
            playerRef.current.position.add(moveDirection);

            // stomp로 이전
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
                        direction: [0, 0, 0],
                    },
                })
            );
        } else {
            // 다른 플레이어의 캐릭터
            roomState.roomPlayers.forEach((otherPlayer: any) => {
                if (
                    otherPlayer.nickname !== meInfo?.nickname &&
                    otherPlayer.isSeeker === false
                ) {
                    const otherPlayerRef = playerRef.current;
                    if (otherPlayerRef) {
                        // 위치 적용
                        otherPlayerRef?.position.set(
                            otherPlayer.position[0],
                            otherPlayer.position[1],
                            otherPlayer.position[2]
                        );
                    }
                }
            });
        }

        // if (playerRef.current.position.distanceTo(position) > 0.1) {
        //     const direction = playerRef.current.position
        //         .clone()
        //         .sub(position)
        //         .normalize()
        //         .multiplyScalar(0.04);

        //     playerRef.current.position.add(moveVector);
        //     playerRef.current.position.sub(direction);
        //     playerRef.current.lookAt(position);
        // } else {
        // }

        if (nicknameRef.current) {
            nicknameRef.current.position.set(
                playerRef.current.position.x,
                playerRef.current.position.y + 3.5,
                playerRef.current.position.z
            );
            nicknameRef.current.lookAt(10000, 10000, 10000);
        }
        if (meInfo?.nickname === playerNickname) {
            camera.position.set(
                playerRef.current.position.x + 12,
                playerRef.current.position.y + 12,
                playerRef.current.position.z + 12
            );
            camera.lookAt(playerRef.current.position);
        }
    });

    return {
        meInfo,
        playerRef,
        memoizedPosition,
        playerNickname,
        scene,
        nicknameRef,
        scale,
        node,
        material,
    };
    function returnMaterial(num: number | undefined) {
        switch (num) {
            case 0:
                return materials['Cartoon_Room_Mat.002'];
            case 1:
                return materials['Cartoon_Room_Mat.002'];
            case 2:
                return materials['Cartoon_Room_Mat.002'];
            case 3:
                return materials['Cartoon_Room_Mat.002'];
            case 4:
                return materials['Cartoon_Room_Mat.002'];
            case 5:
                return materials['Cartoon_Room_Mat.002'];
            case 6:
                return materials['Cartoon_Room_Mat.002'];
            case 7:
                return materials['Cartoon_Room_Mat.002'];
            case 8:
                return materials['Cartoon_Room_Mat.002'];
            case 9:
                return materials['Cartoon_Room_Mat.002'];
            case 10:
                return materials['Cartoon_Room_Mat.002'];
            case 11:
                return materials['Cartoon_Room_Mat.002'];
            case 12:
                return materials['Cartoon_Room_Mat.002'];
            case 13:
                return materials['Cartoon_Room_Mat.002'];
            case 14:
                return materials['Cartoon_Room_Mat.002'];
            default:
                return materials['Cartoon_Room_Mat.002'];
        }
    }
    function returnNode(num: number | undefined) {
        switch (num) {
            case 0:
                return (nodes.Barrel_1 as SkinnedMesh).geometry;
            case 1:
                return (nodes.Cabinet_18 as SkinnedMesh).geometry;
            case 2:
                return (nodes.Chair_11 as SkinnedMesh).geometry;
            case 3:
                return (nodes.Chair_4 as SkinnedMesh).geometry;
            case 4:
                return (nodes.Toy_Pig_1 as SkinnedMesh).geometry;
            case 5:
                return (nodes.Kitchen_Cabinet_4 as SkinnedMesh).geometry;
            case 6:
                return (nodes.Washstand_2 as SkinnedMesh).geometry;
            case 7:
                return (nodes.Kitchen_Cabinet_5 as SkinnedMesh).geometry;
            case 8:
                return (nodes.Kitchen_Cabinet_5 as SkinnedMesh).geometry;
            case 9:
                return (nodes.Kitchen_Cabinet_6 as SkinnedMesh).geometry;
            case 10:
                return (nodes.Ladder_1 as SkinnedMesh).geometry;
            case 11:
                return (nodes.Shelf_4 as SkinnedMesh).geometry;
            case 12:
                return (nodes.Table_5 as SkinnedMesh).geometry;
            case 13:
                return (nodes.Ham_1 as SkinnedMesh).geometry;
            case 14:
                return (nodes.Ham_2 as SkinnedMesh).geometry;
            case 15:
                return (nodes.Pot_2 as SkinnedMesh).geometry;
            case 16:
                return (nodes.Pot_1 as SkinnedMesh).geometry;
            case 17:
                return (nodes.Fridge_2 as SkinnedMesh).geometry;
            case 18:
                return (nodes.Table_13 as SkinnedMesh).geometry;
            default:
                return (nodes.Cabinet_18 as SkinnedMesh).geometry;
        }
    }
};
