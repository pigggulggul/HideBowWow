import { Mesh, Vector3 } from 'three';
import { useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useMemo } from 'react';

const scale = 2;
export function MapTest() {
    const { scene } = useGLTF('/models/mapTest.glb');
    const texture = useTexture('/sand.jpg');
    const position = useMemo(() => new Vector3(0, 0, 8), []);

    useEffect(() => {
        scene.traverse((object) => {
            // 메쉬 타입인지 확인
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                // 머티리얼이 이미지 텍스처를 지원하는지 확인 후 적용
                if (object.material && 'map' in object.material) {
                    object.material.map = texture;
                    object.material.needsUpdate = true; // 머티리얼 업데이트 필요 표시
                }
            }
        });
    }, [scene, texture]);
    return (
        <primitive
            name={name}
            scale={scale}
            position={position}
            object={scene}
        ></primitive>
    );
}
