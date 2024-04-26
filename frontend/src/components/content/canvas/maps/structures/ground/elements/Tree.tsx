import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { Vector3 } from 'three';
import { SkeletonUtils } from 'three-stdlib';

const name = 'ground-tree';
interface ObjectType {
    position: number[];
}
export function Tree({ position }: ObjectType) {
    const { scene: scene_ } = useGLTF('/models/Tree.glb');
    const scene = useMemo(() => {
        return SkeletonUtils.clone(scene_);
    }, []);
    useEffect(() => {
        scene.traverse((mesh) => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        });
    }, [scene]);
    return (
        <primitive
            visible
            name={name}
            scale={1}
            position={position}
            object={scene}
        ></primitive>
    );
}
