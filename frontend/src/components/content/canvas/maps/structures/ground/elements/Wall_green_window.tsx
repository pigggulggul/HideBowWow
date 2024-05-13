/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Wall_green_window.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Wall_green_window.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Mesh020: THREE.Mesh;
        Mesh020_1: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
        Cartoon_Room_Glass: THREE.MeshStandardMaterial;
    };
};

export function Wall_green_window(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Wall_green_window.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [10, 1, 8],
        mass: 0.1,
        position: [props.position[0], props.position[1], props.position[2]],
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group dispose={null}>
            <group
                position={props.position}
                rotation={props.rotation}
                scale={0.01}
            >
                <mesh
                    ref={ref}
                    geometry={nodes.Mesh020.geometry}
                    material={materials.Cartoon_Room_Mat}
                />
                <mesh
                    geometry={nodes.Mesh020_1.geometry}
                    material={materials.Cartoon_Room_Glass}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Wall_green_window.glb');