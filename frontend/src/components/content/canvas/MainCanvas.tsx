import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { RootMap } from './maps/RootMap';
import { Physics } from '@react-three/cannon';
import { useEffect, useState, Suspense } from 'react';

export function MainCanvas() {
    const aspectRatio = window.innerWidth / window.innerHeight; 

    // const lockPointer = () => {
    //     const element = document.body;
    //     const requestPointerLock = element.requestPointerLock;
    //     if (requestPointerLock) {
    //         requestPointerLock.call(element);
    //     }
    // };
 
    // const handleKeyDown = (event : KeyboardEvent) => { 
    //     if (event.key === ' ') {
    //         lockPointer();
    //     }
    // };
 
    // const handleMouseClick = (event: MouseEvent) => { 
    //     lockPointer();
    // };
 
    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeyDown);
    //     window.addEventListener('mousedown', handleMouseClick);
 
    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //         window.removeEventListener('mousedown', handleMouseClick);
    //     };
    // }, []);
    
    const [pointerLocked, setPointerLocked] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event : KeyboardEvent) => {
            if (event.key === ' ' && !pointerLocked) {
                requestPointerLock();
            }
        };
  
        const handlePointerLockChange = () => {
            setPointerLocked(
                document.pointerLockElement === document.body 
            );
        };

        const requestPointerLock = () => {
            const element = document.body;
            const requestPointerLock =
                element.requestPointerLock 
            if (requestPointerLock) {
                requestPointerLock.call(element);
            }
        };

        window.addEventListener('keydown', handleKeyDown); 
        document.addEventListener('pointerlockchange', handlePointerLockChange); 

        return () => {
            window.removeEventListener('keydown', handleKeyDown); 
            document.removeEventListener('pointerlockchange', handlePointerLockChange); 
        };
    }, [pointerLocked]);

    return (
        <Suspense
            fallback={
                <div className="absolute flex justify-center items-center text-3xl">
                    <p>loading...</p>
                </div>
            }
        >
            <Canvas
                id="canvas"
                // gl={{ antialias: true }}
                // shadows
                camera={{
                    fov: 30,
                    aspect: aspectRatio,
                    near: 0.01,
                    far: 10000,
                    position: [12, 12, 12],
                }}
            >
                <Sky distance={200} sunPosition={[0, 1, 0]} />
                <ambientLight name="ambientLight" intensity={5} />
                <directionalLight
                    // castShadow
                    intensity={10}
                    position={[0, 50, -50]}
                    // shadow-normalBias={0.1}
                    // shadow-camera-left={-25}
                    // shadow-camera-right={25}
                    // shadow-camera-top={25}
                    // shadow-camera-bottom={-25}
                    // shadow-camera-near={0.1}
                    // shadow-camera-far={200}
                />
                <OrbitControls />

                <Physics>
                    {/* <Debug> */}
                    <RootMap />
                    {/* </Debug> */}
                </Physics>
                {/* 최적화 관련 */}
                {/* <StatsGl /> */}
                {/* <DrawCallCounter /> */}
            </Canvas>
        </Suspense>
    );
}
