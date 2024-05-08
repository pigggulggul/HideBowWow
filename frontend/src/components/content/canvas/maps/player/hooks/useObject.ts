import { useGLTF } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    Group,
    Mesh,
    MeshStandardMaterial,
    SkinnedMesh,
    Vector3,
    Quaternion,
} from 'three';
import { Face, GLTF, SkeletonUtils } from 'three-stdlib';
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
        Armchair_1: Mesh;
        Armchair_2: Mesh;
        Basket_2: Mesh;
        Bath_1: Mesh;
        Bed_2: Mesh;
        Bed_6: Mesh;
        Bed_3: Mesh;
        Books_6: Mesh;
        Books_8: Mesh;
        Books_4: Mesh;
        Books_2: Mesh;
        Books_15: Mesh;
        Bottle_20: Mesh;
        Bottle_22: Mesh;
        Box_7: Mesh;
        Bread_1: Mesh;
        Cactus_5: Mesh;
        Cactus_6: Mesh;
        Cactus_4: Mesh;
        Cake_1: Mesh;
        Carpet_16: Mesh;
        Carpet_8: Mesh;
        Chair_5: Mesh;
        Clock_1: Mesh;
        Coffee_Drink_1: Mesh;
        Cup_1: Mesh;
        Cup_2: Mesh;
        Toy_1: Mesh;
        Chicken_Toy_1: Mesh;
        Toy_Mushroom_1: Mesh;
        Toy_Mushroom_2: Mesh;
        Toy_Cat_1: Mesh;
        Toy_Rabbit_1: Mesh;
        Cabinet_19: Mesh;
        Kitchen_Cabinet_3: Mesh;
        Flower_5: Mesh;
        Flower_2: Mesh;
        Flower_1: Mesh;
        Vase_with_Flowers_1: Mesh;
        Vase_with_Flowers_3: Mesh;
        Flower_6: Mesh;
        Flower_7: Mesh;
        Flower_8: Mesh;
        Flower_9: Mesh;
        Flower_10: Mesh;
        Spatula_1: Mesh;
        Painting_18: Mesh;
        Painting_19: Mesh;
        Painting_20: Mesh;
        Childrens_Drawing_3: Mesh;
        Childrens_Drawing_1: Mesh;
        Childrens_Drawing_2: Mesh;
        Flags_1: Mesh;
        Mannequin_1: Mesh;
        Mirror_1: Mesh;
        Ottoman_1: Mesh;
        Ottoman_2: Mesh;
        Ottoman_3: Mesh;
        Plate_1: Mesh;
        Plate_3: Mesh;
        Pot_Full_1: Mesh;
        Present_1: Mesh;
        Present_2: Mesh;
        Present_3: Mesh;
        Puzzle_1: Mesh;
        Puzzle_2: Mesh;
        Puzzle_3: Mesh;
        Puzzle_4: Mesh;
        Table_6: Mesh;
        Sandwich_1: Mesh;
        Sausages_1: Mesh;
        Sewing_machine_1: Mesh;
        Couch_5: Mesh;
        Couch_1: Mesh;
        Towels_1: Mesh;
        Towels_2: Mesh;
        TV_1: Mesh;
        Plant_44: Mesh;
        Plant_60: Mesh;
        Plant_65: Mesh;
        Tree_1: Mesh;
        Plant_17: Mesh;
    };
    materials: {
        Cartoon_Room_Mat: MeshStandardMaterial;
        ['Cartoon_Room_Mat.002']: MeshStandardMaterial;
    };
    animations: any[];
};

class ObjectRef extends Group {
    viewUpDown: number = 0;
    viewLR: number = 0;
}

class Observer {
    position: Vector3 = new Vector3(0, 0, 0);
    viewUpDown: number = 0;
    viewLR: number = 0;
}

export const useObject = ({ player, position, modelIndex }: PlayerInitType) => {
    const playerNickname = player?.nickname;
    const keyState = useRef<{ [key: string]: boolean }>({});
    const [mouseWheelValue, setMouseWheelValue] = useState(Number);
    const [freeViewMode, setFreeViewMode] = useState(false);
    const [callsInLastSecond, setCallsInLastSecond] = useState(0);
    const [delay, setDelay] = useState(0.00008);

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

    const initialHeight = returnHeightSize(modelIndex);
    position.y = initialHeight;

    const memoizedPosition = useMemo(() => position, []);
    const playerRef = useRef<ObjectRef>(null);
    const nicknameRef = useRef<ObjectRef>(null);
    const accumulatedTimeRef = useRef(0.0);
    const observerRef = useRef<Observer | null>(null);
    const [observedPlayerIndex, setObservedPlayerIndex] = useState(0); 
    const callsInLastSecondRef = useRef(callsInLastSecond);

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
                    return '/models/object/Armchair_1.glb';
                case 20:
                    return '/models/object/Armchair_2.glb';
                case 21:
                    return '/models/object/Basket_1.glb';
                case 22:
                    return '/models/object/Bath_1.glb';
                case 23:
                    return '/models/object/Bed_1.glb';
                case 24:
                    return '/models/object/Bed_2.glb';
                case 25:
                    return '/models/object/Bed_3.glb';
                case 26:
                    return '/models/object/Book_1.glb';
                case 27:
                    return '/models/object/Book_2.glb';
                case 28:
                    return '/models/object/Book_3.glb';
                case 29:
                    return '/models/object/Book_4.glb';
                case 30:
                    return '/models/object/Book_5.glb';
                case 31:
                    return '/models/object/Bottle_1.glb';
                case 32:
                    return '/models/object/Bottle_2.glb';
                case 33:
                    return '/models/object/Box_1.glb';
                case 34:
                    return '/models/object/Bread.glb';
                case 35:
                    return '/models/object/Cactus_1.glb';
                case 36:
                    return '/models/object/Cactus_2.glb';
                case 37:
                    return '/models/object/Cactus_3.glb';
                case 38:
                    return '/models/object/Cake_1.glb';
                case 39:
                    return '/models/object/Carpet_1.glb';
                case 40:
                    return '/models/object/Carpet_2.glb';
                case 41:
                    return '/models/object/Chair_orange.glb';
                case 42:
                    return '/models/object/Clock_1.glb';
                case 43:
                    return '/models/object/Coffee_drink.glb';
                case 44:
                    return '/models/object/Cup_1.glb';
                case 45:
                    return '/models/object/Cup_2.glb';
                case 46:
                    return '/models/object/Doll_bear.glb';
                case 47:
                    return '/models/object/Doll_Chick.glb';
                case 48:
                    return '/models/object/Doll_mushroom_1.glb';
                case 49:
                    return '/models/object/Doll_mushroom_2.glb';
                case 50:
                    return '/models/object/Doll_Polar.glb';
                case 51:
                    return '/models/object/Doll_rabbit.glb';
                case 52:
                    return '/models/object/Drawer_blue_1.glb';
                case 53:
                    return '/models/object/Drawer_pink_1.glb';
                case 54:
                    return '/models/object/Flower_1.glb';
                case 55:
                    return '/models/object/Flower_2.glb';
                case 56:
                    return '/models/object/Flower_3.glb';
                case 57:
                    return '/models/object/Flower_5.glb';
                case 58:
                    return '/models/object/Flower_6.glb';
                case 59:
                    return '/models/object/Flower_7.glb';
                case 60:
                    return '/models/object/Flower_8.glb';
                case 61:
                    return '/models/object/Flower_9.glb';
                case 62:
                    return '/models/object/Flower_10.glb';
                case 63:
                    return '/models/object/Flower_11.glb';
                case 64:
                    return '/models/object/Fork.glb';
                case 65:
                    return '/models/object/Frame_1.glb';
                case 66:
                    return '/models/object/Frame_2.glb';
                case 67:
                    return '/models/object/Frame_3.glb';
                case 68:
                    return '/models/object/Frame_5.glb';
                case 69:
                    return '/models/object/Frame_6.glb';
                case 70:
                    return '/models/object/Frame_7.glb';
                case 71:
                    return '/models/object/Frame_8.glb';
                case 72:
                    return '/models/object/Mannequin_1.glb';
                case 73:
                    return '/models/object/Mirror_1.glb';
                case 74:
                    return '/models/object/Ottoman_1.glb';
                case 75:
                    return '/models/object/Ottoman_2.glb';
                case 76:
                    return '/models/object/Ottoman_3.glb';
                case 77:
                    return '/models/object/Plate_1.glb';
                case 78:
                    return '/models/object/Plate_2.glb';
                case 79:
                    return '/models/object/Pot_full_1.glb';
                case 80:
                    return '/models/object/Present_1.glb';
                case 81:
                    return '/models/object/Present_2.glb';
                case 82:
                    return '/models/object/Present_3.glb';
                case 83:
                    return '/models/object/Puzzle_1.glb';
                case 84:
                    return '/models/object/Puzzle_2.glb';
                case 85:
                    return '/models/object/Puzzle_3.glb';
                case 86:
                    return '/models/object/Puzzle_4.glb';
                case 87:
                    return '/models/object/RoundTable_orange.glb';
                case 88:
                    return '/models/object/Sandwich_1.glb';
                case 89:
                    return '/models/object/Sausages_1.glb';
                case 90:
                    return '/models/object/Sewing_machine_1.glb';
                case 91:
                    return '/models/object/Sofa_1.glb';
                case 92:
                    return '/models/object/Sofa_2.glb';
                case 93:
                    return '/models/object/Towels_1.glb';
                case 94:
                    return '/models/object/Towels_2.glb';
                case 95:
                    return '/models/object/Tv.glb';
                case 96:
                    return '/models/object/Vase_1.glb';
                case 97:
                    return '/models/object/Vase_2.glb';
                case 98:
                    return '/models/object/Vase_3.glb';
                case 99:
                    return '/models/object/Vase_4.glb';
                case 100:
                    return '/models/object/Vase_5.glb';
                default:
                    return '/models/object/Closet.glb';
            }
        })()
    ) as GLTFResult;
    const getScaleByModelIndex = (_: number | undefined) => {
        return 0.025;
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

    // const [ref] = useBox(() => ({
    //     mass: 0,
    //     args: [1, 1, 1],
    //     position: [position.x, position.y, position.z], // 초기 위치를 useRef의 현재 값으로 설정
    //     onCollide: (e) => {
    //         console.log('충돌', e);
    //     },
    // }));

    const updateRotationX = (movementY: number) => {
        // 아래 위
        const rotationAmount = movementY * 0.02; // 회전 속도 조절

        if (playerRef.current) {
            // 시야각 제한
            const maxRotationX = Math.PI * 1.5;
            const minRotationX = -Math.PI * 1.5;
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

        if (observerRef.current) {
            observerRef.current.viewUpDown -= rotationAmount * 0.05; // 이 부분 수정
        }
    };

    const updateRotationY = (movementX: number) => {
        //좌 우
        const rotationAmount = movementX * 0.0013; // 회전 속도 조절을 위해 상수를 곱합니다.
        if (playerRef.current) {
            // playerRef.current.rotation.y -= rotationAmount;
            playerRef.current.viewLR -= rotationAmount;
        }

        if (observerRef.current) {
            observerRef.current.viewLR -= rotationAmount;
        }
    };

    const handleMouseWheel = (event: WheelEvent) => {
        // 마우스 휠을 아래로 내릴 때
        if (event.deltaY > 0) {
            setMouseWheelValue((prevValue) => Math.min(12, prevValue + 1)); // 최댓값인 12를 넘지 않도록 설정
        }
        // 마우스 휠을 위로 올릴 때
        else if (event.deltaY < 0) {
            setMouseWheelValue((prevValue) => Math.max(1, prevValue - 1)); // 최솟값인 1보다 작아지지 않도록 설정
        }
    };

    const lockPointer = () => {
        const element = document.body;
        const requestPointerLock = element.requestPointerLock;
        requestPointerLock.call(element);
    };

    const toggleFreeViewMode = () => {
        setFreeViewMode((prevMode) => !prevMode);
    };

    const handlePageUp = () => {
        // 플레이어 관전
        setObservedPlayerIndex((prevIndex) => {
            // 관전 중인 플레이어의 인덱스를 증가시킵니다.
            return (prevIndex + 1) % roomState.roomPlayers.length;
        });  
    };  

    const handlePageDown = () => {
        setObservedPlayerIndex((prevIndex) => {
            // 관전 중인 플레이어의 인덱스를 감소시킵니다.
            return (prevIndex - 1 + roomState.roomPlayers.length) % roomState.roomPlayers.length;
        });  
    };  
    
    useEffect(() => {
        callsInLastSecondRef.current = callsInLastSecond;  
    }, [callsInLastSecond]);
    
    useEffect(() => {  
        // 3초마다 호출
        if(meInfo?.nickname === playerNickname) { 
            const intervalId = setInterval(() => { 
                console.log("초당 평균 프레임 :", (callsInLastSecondRef.current/3));
                setCallsInLastSecond(0); // 85 ~ 95
                if(callsInLastSecondRef.current > 95) {
                    setDelay(preDelay => preDelay + 0.00001) 
                    console.log("딜레이 값을 올리겠습니다.");
                } else if (callsInLastSecondRef.current < 85) {
                    setDelay(preDelay => preDelay - 0.00001)   
                    console.log("딜레이 값을 낮추겠습니다.");
                }  
            }, 3000);  
            
            return () => clearInterval(intervalId);
        }  
    }, []); 
 
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

        setMouseWheelValue(10);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('wheel', handleMouseWheel);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('wheel', handleMouseWheel);
        };
    }, []);

    useEffect(() => {
        if (playerRef.current) {
            // if (ref.current) {
            //     ref.current.name = playerNickname;
            // }
            playerRef.current.name = playerNickname;
            playerRef.current.userData.physicsName = playerNickname; // userData에 이름 추가
            playerRef.current.viewLR = 0;
        }
        // if (ref.current) {
        //     // Mesh 객체를 찾아 이름을 할당합니다.
        //     const mesh = ref.current.children.find(
        //         (child) => child.type === 'Mesh'
        //     );
        //     if (mesh) {
        //         mesh.name = playerNickname;
        //     }
        // }
    }, [playerNickname]);

    // 키 입력
    useEffect(() => {
        const handleKeyDown = (event: any) => {
            keyState.current[event.key] = true;
            if (event.key === 'r') {
                toggleFreeViewMode();
            }
        };

        const handleKeyUp = (event: any) => {
            keyState.current[event.key] = false;
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight' && !meInfo.isDead) {
                handlePageUp();
            } else if (event.key === 'ArrowLeft' && !meInfo.isDead) {
                handlePageDown();
            }
        });
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []); 
 
    useFrame(({ camera , clock }) => {  
        if (!player || !playerRef.current) return;   

        if (meInfo?.nickname === playerNickname) {   

            const delta = clock.getDelta(); // 프레임 간 시간 간격을 가져옵니다.
            accumulatedTimeRef.current += delta; 
            
            if(meInfo?.isDead === false) { // 살아있는 경우
                if(!freeViewMode) { // 3인칭 모드 
                    const moveVector = new Vector3(
                        (keyState.current['d'] ? 1 : 0) -
                            (keyState.current['a'] ? 1 : 0), // 수정: 오른쪽이면 1, 왼쪽이면 -1
                        0,
                        (keyState.current['w'] ? 1 : 0) -
                            (keyState.current['s'] ? 1 : 0) // 수정: 위쪽이면 1, 아래쪽이면 -1
                    );

                    if (keyState.current['q']) {
                        playerRef.current.rotation.y += 0.025;
                    }

                    if (keyState.current['e']) {
                        playerRef.current.rotation.y -= 0.025;
                    }
        
                    if (!moveVector.equals(new Vector3(0, 0, 0))) { // 이동중
                        lockPointer();
                        moveVector.normalize().multiplyScalar(0.2);

                        const forward = new Vector3(
                            Math.sin(playerRef.current.viewLR), // viewLR 값으로 삼각함수를 통해 x 값을 설정
                            0,
                            Math.cos(playerRef.current.viewLR) // viewLR 값으로 삼각함수를 통해 z 값을 설정
                        ).normalize(); // 벡터를 정규화하여 길이를 1로 만듭니다.

                        const moveDirection = forward
                            .clone()
                            .multiplyScalar(moveVector.z)
                            .add(
                                new Vector3(
                                    -forward.z,
                                    0,
                                    forward.x
                                ).multiplyScalar(moveVector.x)
                            );
                        playerRef.current.position.add(moveDirection);

                        // stomp로 이전
                        if (accumulatedTimeRef.current >= delay) {
                            accumulatedTimeRef.current = 0;
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
                                            Math.sin(
                                                playerRef.current.rotation.y
                                            ),
                                            0,
                                            Math.cos(
                                                playerRef.current.rotation.y
                                            ),
                                        ],
                                    },
                                })
                            );
                            setCallsInLastSecond(prevCount => prevCount + 1);
                        }
                    } else {
                        // 고정된 상태
                        // rotation값 stomp
                        if (accumulatedTimeRef.current >= delay) {
                            accumulatedTimeRef.current = 0;
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
                                            Math.sin(
                                                playerRef.current.rotation.y
                                            ),
                                            0,
                                            Math.cos(
                                                playerRef.current.rotation.y
                                            ),
                                        ],
                                    },
                                })
                            );
                            setCallsInLastSecond(prevCount => prevCount + 1);
                        }
                    }
                    // 카메라 설정
                    const playerPosition = playerRef.current.position.clone();
                    // 플레이어가 바라보는 곳
                    const playerDirection = new Vector3(
                        Math.sin(playerRef.current.viewLR),
                        playerRef.current.viewUpDown + 5,
                        Math.cos(playerRef.current.viewLR)
                    ); 
                    
                    // 카메라 위치
                    playerDirection.multiplyScalar(mouseWheelValue * 2);
                    camera.position.set(
                        playerPosition.x - playerDirection.x,
                        playerPosition.y + 8 - playerRef.current.viewUpDown,
                        playerPosition.z - playerDirection.z
                    );

                    playerDirection.multiplyScalar(0.5);

                    // 카메라가 바라볼 위치
                    const carmeraTarget = new Vector3(
                        playerPosition.x + playerDirection.x,
                        0,
                        playerPosition.z + playerDirection.z
                    );
                    camera.lookAt(carmeraTarget);
                } else {
                    // 자유 시점 모드 (R클릭)
                    if (!observerRef.current) {
                        observerRef.current = new Observer();
                        observerRef.current.position = new Vector3(
                            playerRef.current.position.x + 12,
                            playerRef.current.position.y + 12,
                            playerRef.current.position.z + 12
                        );
                        observerRef.current.viewLR = playerRef.current.viewLR;
                        observerRef.current.viewUpDown =
                            playerRef.current.viewUpDown;
                    }

                    const moveVector = new Vector3(
                        (keyState.current['d'] ? 1 : 0) -
                            (keyState.current['a'] ? 1 : 0),
                        0,
                        (keyState.current['w'] ? 1 : 0) -
                            (keyState.current['s'] ? 1 : 0)
                    );
                    if (!moveVector.equals(new Vector3(0, 0, 0))) {
                        moveVector.normalize().multiplyScalar(0.2); // 속도조절

                        const forward = new Vector3(
                            Math.sin(observerRef.current.viewLR), // viewLR 값으로 삼각함수를 통해 x 값을 설정
                            Math.sin(observerRef.current.viewUpDown),
                            Math.cos(observerRef.current.viewLR) // viewLR 값으로 삼각함수를 통해 z 값을 설정
                        ).normalize(); // 벡터를 정규화하여 길이를 1로 만듭니다.

                        const moveDirection = forward
                            .clone()
                            .multiplyScalar(moveVector.z)
                            .add(
                                new Vector3(
                                    -forward.z,
                                    0,
                                    forward.x
                                ).multiplyScalar(moveVector.x)
                            );

                        observerRef.current.position.add(moveDirection);
                    }

                    // 프리뷰 카메라 설정
                    const observerDirection = new Vector3( // 플레이어가 바라보는 곳
                        Math.sin(observerRef.current.viewLR),
                        observerRef.current.viewUpDown, // 아래 위
                        Math.cos(observerRef.current.viewLR)
                    );
                    const cameraTarget = observerRef.current.position
                        .clone()
                        .add(observerDirection.multiplyScalar(3));

                    camera.position.set(
                        observerRef.current.position.x,
                        observerRef.current.position.y,
                        observerRef.current.position.z
                    );
                    camera.lookAt(cameraTarget); 
                }     
            }    
        } else {
            // 다른 플레이어의 캐릭터
            roomState.roomPlayers.forEach((otherPlayer: any) => {
                if (
                    otherPlayer.nickname !== meInfo?.nickname &&
                    otherPlayer.nickname === playerNickname &&
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

                        // 방향 적용
                        const rotationVector = new Vector3(
                            otherPlayer.direction[0],
                            otherPlayer.direction[1],
                            otherPlayer.direction[2]
                        );
                        rotationVector.normalize(); // 회전 벡터를 정규화합니다.
                        const forward = new Vector3(0, 0, -1).applyQuaternion(
                            new Quaternion().setFromUnitVectors(
                                new Vector3(0, 0, -1),
                                rotationVector
                            )
                        );
                        otherPlayerRef.lookAt(
                            otherPlayerRef.position.clone().add(forward)
                        );
                    }
                }  
            });
        }
        
        if(meInfo?.isDead) { // 사망한 경우 
             // 죽어있는 경우 (관전모드)    
                // if(meInfo.isSeeker === true) return;  
  
                const observedPlayer = roomState.roomPlayers[observedPlayerIndex]; 
                
                if (observedPlayer) {
                    // console.log("현재 관전중인 플레이어 인덱스: " + observedPlayerIndex) 
                    camera.position.set(
                        observedPlayer.position[0] + 10,
                        observedPlayer.position[1] + 10,
                        observedPlayer.position[2] + 10 
                    ); 
                    camera.lookAt(observedPlayer.position[0], observedPlayer.position[1], observedPlayer.position[2]);
                }
        }

        if(meInfo.isSeeker === false) { // 사물만 사물의 이름을 식별할 수 있다
            if (nicknameRef.current) {
                nicknameRef.current.position.set(
                    playerRef.current.position.x,
                    playerRef.current.position.y + 3.5,
                    playerRef.current.position.z
                );
                nicknameRef.current.lookAt(camera.position);
            }
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
        if (num === undefined || num < 19) {
            return materials['Cartoon_Room_Mat.002'];
        } else {
            return materials.Cartoon_Room_Mat;
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
            case 19:
                return (nodes.Armchair_1 as SkinnedMesh).geometry;
            case 20:
                return (nodes.Armchair_2 as SkinnedMesh).geometry;
            case 21:
                return (nodes.Basket_2 as SkinnedMesh).geometry;
            case 22:
                return (nodes.Bath_1 as SkinnedMesh).geometry;
            case 23:
                return (nodes.Bed_2 as SkinnedMesh).geometry;
            case 24:
                return (nodes.Bed_6 as SkinnedMesh).geometry;
            case 25:
                return (nodes.Bed_3 as SkinnedMesh).geometry;
            case 26:
                return (nodes.Books_6 as SkinnedMesh).geometry;
            case 27:
                return (nodes.Books_8 as SkinnedMesh).geometry;
            case 28:
                return (nodes.Books_4 as SkinnedMesh).geometry;
            case 29:
                return (nodes.Books_2 as SkinnedMesh).geometry;
            case 30:
                return (nodes.Books_15 as SkinnedMesh).geometry;
            case 31:
                return (nodes.Bottle_20 as SkinnedMesh).geometry;
            case 32:
                return (nodes.Bottle_22 as SkinnedMesh).geometry;
            case 33:
                return (nodes.Box_7 as SkinnedMesh).geometry;
            case 34:
                return (nodes.Bread_1 as SkinnedMesh).geometry;
            case 35:
                return (nodes.Cactus_5 as SkinnedMesh).geometry;
            case 36:
                return (nodes.Cactus_6 as SkinnedMesh).geometry;
            case 37:
                return (nodes.Cactus_4 as SkinnedMesh).geometry;
            case 38:
                return (nodes.Cake_1 as SkinnedMesh).geometry;
            case 39:
                return (nodes.Carpet_16 as SkinnedMesh).geometry;
            case 40:
                return (nodes.Carpet_8 as SkinnedMesh).geometry;
            case 41:
                return (nodes.Chair_5 as SkinnedMesh).geometry;
            case 42:
                return (nodes.Clock_1 as SkinnedMesh).geometry;
            case 43:
                return (nodes.Coffee_Drink_1 as SkinnedMesh).geometry;
            case 44:
                return (nodes.Cup_1 as SkinnedMesh).geometry;
            case 45:
                return (nodes.Cup_2 as SkinnedMesh).geometry;
            case 46:
                return (nodes.Toy_1 as SkinnedMesh).geometry;
            case 47:
                return (nodes.Chicken_Toy_1 as SkinnedMesh).geometry;
            case 48:
                return (nodes.Toy_Mushroom_1 as SkinnedMesh).geometry;
            case 49:
                return (nodes.Toy_Mushroom_2 as SkinnedMesh).geometry;
            case 50:
                return (nodes.Toy_Cat_1 as SkinnedMesh).geometry;
            case 51:
                return (nodes.Toy_Rabbit_1 as SkinnedMesh).geometry;
            case 52:
                return (nodes.Cabinet_19 as SkinnedMesh).geometry;
            case 53:
                return (nodes.Kitchen_Cabinet_3 as SkinnedMesh).geometry;
            case 54:
                return (nodes.Flower_5 as SkinnedMesh).geometry;
            case 55:
                return (nodes.Flower_2 as SkinnedMesh).geometry;
            case 56:
                return (nodes.Flower_1 as SkinnedMesh).geometry;
            case 57:
                return (nodes.Vase_with_Flowers_1 as SkinnedMesh).geometry;
            case 58:
                return (nodes.Vase_with_Flowers_3 as SkinnedMesh).geometry;
            case 59:
                return (nodes.Flower_6 as SkinnedMesh).geometry;
            case 60:
                return (nodes.Flower_7 as SkinnedMesh).geometry;
            case 61:
                return (nodes.Flower_8 as SkinnedMesh).geometry;
            case 62:
                return (nodes.Flower_9 as SkinnedMesh).geometry;
            case 63:
                return (nodes.Flower_10 as SkinnedMesh).geometry;
            case 64:
                return (nodes.Spatula_1 as SkinnedMesh).geometry;
            case 65:
                return (nodes.Painting_18 as SkinnedMesh).geometry;
            case 66:
                return (nodes.Painting_19 as SkinnedMesh).geometry;
            case 67:
                return (nodes.Painting_20 as SkinnedMesh).geometry;
            case 68:
                return (nodes.Childrens_Drawing_3 as SkinnedMesh).geometry;
            case 69:
                return (nodes.Childrens_Drawing_1 as SkinnedMesh).geometry;
            case 70:
                return (nodes.Childrens_Drawing_2 as SkinnedMesh).geometry;
            case 71:
                return (nodes.Flags_1 as SkinnedMesh).geometry;
            case 72:
                return (nodes.Mannequin_1 as SkinnedMesh).geometry;
            case 73:
                return (nodes.Mirror_1 as SkinnedMesh).geometry;
            case 74:
                return (nodes.Ottoman_1 as SkinnedMesh).geometry;
            case 75:
                return (nodes.Ottoman_2 as SkinnedMesh).geometry;
            case 76:
                return (nodes.Ottoman_3 as SkinnedMesh).geometry;
            case 77:
                return (nodes.Plate_1 as SkinnedMesh).geometry;
            case 78:
                return (nodes.Plate_3 as SkinnedMesh).geometry;
            case 79:
                return (nodes.Pot_Full_1 as SkinnedMesh).geometry;
            case 80:
                return (nodes.Present_1 as SkinnedMesh).geometry;
            case 81:
                return (nodes.Present_2 as SkinnedMesh).geometry;
            case 82:
                return (nodes.Present_3 as SkinnedMesh).geometry;
            case 83:
                return (nodes.Puzzle_1 as SkinnedMesh).geometry;
            case 84:
                return (nodes.Puzzle_2 as SkinnedMesh).geometry;
            case 85:
                return (nodes.Puzzle_3 as SkinnedMesh).geometry;
            case 86:
                return (nodes.Puzzle_4 as SkinnedMesh).geometry;
            case 87:
                return (nodes.Table_6 as SkinnedMesh).geometry;
            case 88:
                return (nodes.Sandwich_1 as SkinnedMesh).geometry;
            case 89:
                return (nodes.Sausages_1 as SkinnedMesh).geometry;
            case 90:
                return (nodes.Sewing_machine_1 as SkinnedMesh).geometry;
            case 91:
                return (nodes.Couch_5 as SkinnedMesh).geometry;
            case 92:
                return (nodes.Couch_1 as SkinnedMesh).geometry;
            case 93:
                return (nodes.Towels_1 as SkinnedMesh).geometry;
            case 94:
                return (nodes.Towels_2 as SkinnedMesh).geometry;
            case 95:
                return (nodes.TV_1 as SkinnedMesh).geometry;
            case 96:
                return (nodes.Plant_44 as SkinnedMesh).geometry;
            case 97:
                return (nodes.Plant_60 as SkinnedMesh).geometry;
            case 98:
                return (nodes.Plant_65 as SkinnedMesh).geometry;
            case 99:
                return (nodes.Tree_1 as SkinnedMesh).geometry;
            case 100:
                return (nodes.Plant_17 as SkinnedMesh).geometry;
            default:
                return (nodes.Cabinet_18 as SkinnedMesh).geometry;
        }
    }
    function returnHeightSize(num: number | undefined) {
        switch (num) {
            case 0:
            case 4:
            case 13:
            case 14:
            case 15:
            case 16:
            case 21:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 49:
            case 50:
            case 51:
            case 54:
            case 55:
            case 56:
            case 57:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 88:
            case 89:
            case 90:
            case 93:
            case 94:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
                return 1;
            case 1:
            case 2:
            case 3:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 17:
            case 18:
            case 19:
            case 20:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 52:
            case 53:
            case 72:
            case 87:
            case 91:
            case 92:
            case 95:
                return 1;
            default:
                return 1;
        }
    }
};
