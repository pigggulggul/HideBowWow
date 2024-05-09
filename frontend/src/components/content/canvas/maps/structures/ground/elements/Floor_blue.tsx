/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Floor_blue.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Floor_blue.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useBox } from '@react-three/cannon';
import { ObjectSettingType } from '../../../../../../../types/GameType';

type GLTFResult = GLTF & {
    nodes: {
        Floor_19: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
    };
};

export function Floor_blue(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Floor_blue.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [10, 10, 0.1],
        mass: 0.1,
        type: 'Static',
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group position={[0, -0.1, 0]} dispose={null}>
            <mesh
                ref={ref}
                geometry={nodes.Floor_19.geometry}
                material={materials.Cartoon_Room_Mat}
                position={props.position}
                rotation={props.rotation}
                scale-y={0.0218}
                scale-x={0.0218}
                scale-z={0.01}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Floor_blue.glb');
