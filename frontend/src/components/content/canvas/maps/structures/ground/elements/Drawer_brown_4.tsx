/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Drawer_brown_4.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Drawer_brown_4.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Kitchen_Cabinet_5: THREE.Mesh;
    };
    materials: {
        ['Cartoon_Room_Mat.002']: THREE.MeshStandardMaterial;
    };
};

export function Drawer_brown_4(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(
        '/models/object/Drawer_brown_4.glb'
    ) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Kitchen_Cabinet_5.geometry}
                material={materials['Cartoon_Room_Mat.002']}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Drawer_brown_4.glb');
