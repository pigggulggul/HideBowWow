import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    AnimationClip,
    Bone,
    Group,
    MeshStandardMaterial,
    SkinnedMesh,
} from 'three';
import { GLTF, SkeletonUtils } from 'three-stdlib';
import { PlayerInitType } from '../../../../../../types/GameType';
import { useRecoilValue } from 'recoil';
import { MeAtom } from '../../../../../../store/PlayersAtom';

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
};
type ActionName = '';

export const useObject = ({ player, position, modelIndex }: PlayerInitType) => {
    const playerId = player?.id;
    const me = useRecoilValue(MeAtom);

    const memoizedPosition = useMemo(() => position, []);

    const playerRef = useRef<Group>(null);
    const nicknameRef = useRef<Group>(null);
    const { scene: scene_ } = useGLTF(
        (() => {
            switch (modelIndex) {
                case 1:
                    return '/models/Chest with Gold.glb';
                case 2:
                    return '/models/CuteRedDino.glb';
                case 3:
                    return '/models/Doorway.glb';
                case 4:
                    return '/models/furniture-bed.glb';
                case 5:
                    return '/models/furniture-bookcase.glb';
                case 6:
                    return '/models/furniture-chair.glb';
                case 7:
                    return '/models/furniture-coatRack.glb';
                case 8:
                    return '/models/furniture-couch.glb';
                case 9:
                    return '/models/furniture-fridge.glb';
                case 10:
                    return '/models/furniture-gamingComputer.glb';
                case 11:
                    return '/models/furniture-officeChair.glb';
                case 12:
                    return '/models/furniture-standingDesk.glb';
                case 13:
                    return '/models/Jungle gym.glb';
                case 14:
                    return '/models/Little Man.glb';
                case 15:
                    return '/models/Pine Trees.glb';
                case 16:
                    return '/models/Slide.glb';
                case 17:
                    return '/models/Steak.glb';
                case 18:
                    return '/models/Tree.glb';
                case 19:
                    return '/models/Wood Chest.glb';
                case 20:
                    return '/models/Swing.glb';
                default:
                    return '';
            }
        })()
    ) as GLTFResult;
    const getScaleByModelIndex = (index: number | undefined) => {
        const scaleValues: any = {
            1: 1,
            2: 2,
            3: 4,
            4: 2,
            5: 2,
            6: 2,
            7: 2,
            8: 2,
            9: 1,
            10: 3,
            11: 2,
            12: 2,
            13: 0.4,
            14: 3,
            15: 4,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 0.04,
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

    useEffect(() => {});

    useFrame(({ camera }) => {
        if (!player) return;
        if (!playerRef.current) return;
        if (playerRef.current.position.distanceTo(position) > 0.1) {
            const direction = playerRef.current.position
                .clone()
                .sub(position)
                .normalize()
                .multiplyScalar(0.04);

            playerRef.current.position.sub(direction);
            playerRef.current.lookAt(position);
        } else {
        }

        if (nicknameRef.current) {
            nicknameRef.current.position.set(
                playerRef.current.position.x,
                playerRef.current.position.y + 3.5,
                playerRef.current.position.z
            );
            nicknameRef.current.lookAt(10000, 10000, 10000);
        }
        if (me?.id === playerId) {
            camera.position.set(
                playerRef.current.position.x + 12,
                playerRef.current.position.y + 12,
                playerRef.current.position.z + 12
            );
            camera.lookAt(playerRef.current.position);
        }
    });

    return {
        me,
        playerRef,
        memoizedPosition,
        playerId,
        scene,
        nicknameRef,
        scale,
    };
};
