import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { Vector3 } from 'three';

const name = 'ground-swing';
const scale = 0.04;
export function Swing() {
    const { scene } = useGLTF('/models/Swing.glb');
    const position = useMemo(() => new Vector3(8, 0, 8), []);

    useEffect(() => {
        scene.traverse((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
    }, [scene]);
    return (
        <primitive
            name={name}
            scale={scale}
            position={position}
            object={scene}
        ></primitive>
    );
}
