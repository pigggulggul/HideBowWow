/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Fork.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Fork.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Spatula_1: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
    };
};

export function Fork(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Fork.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [0.2, 0.2, 1],
        mass: 0.1,
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group position={[0, 0.2, 0]} dispose={null}>
            <mesh
                ref={ref}
                geometry={nodes.Spatula_1.geometry}
                material={materials.Cartoon_Room_Mat}
                position={props.position}
                rotation={props.rotation}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Fork.glb');