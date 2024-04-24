import { useRecoilState, useRecoilValue } from 'recoil';
import { GroundElements } from './structures/ground';
import {
    CharacterSelectFinishedAtom,
    PlayerAtom,
    SelectedCharacterGlbNameIndexAtom,
} from '../../../../store/PlayersAtom';
import { CharacterInit } from '../../lobby/CharacterInit';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { Player } from './player/Player';
import { ObjectPlayer } from './player/ObjectPlayer';
import { AttackRules } from './player/AttackRules';

export function RootMap() {
    const characterSelectFinished = useRecoilValue(CharacterSelectFinishedAtom);
    const [players] = useRecoilState(PlayerAtom);
    const camera = useThree((three) => three.camera);
    const controls = useRef<any>(null);
    const selectedCharacterGlbNameIndex = useRecoilValue(
        SelectedCharacterGlbNameIndexAtom
    );

    useEffect(() => {
        if (!controls.current) return;
        camera.position.set(14, 14, 14);
        controls.current.target.set(0, 0, 0);
    }, [camera.position]);
    return (
        <>
            {/* 캐릭터 선택 안 하면 캐릭 선택창. 캐릭 선택 후면 player에서 캐릭 가지고오기 */}
            {!characterSelectFinished ? (
                <CharacterInit />
            ) : (
                <>
                    <GroundElements />
                    {players.map((player) => {
                        if (player.isSeeker && !player.isDead) {
                            return (
                                <>
                                    <Player
                                        key={player.id}
                                        player={player}
                                        position={
                                            new Vector3(
                                                player.position[0],
                                                player.position[1],
                                                player.position[2]
                                            )
                                        }
                                        modelIndex={
                                            selectedCharacterGlbNameIndex
                                        }
                                    />
                                </>
                            );
                        } else {
                            if (player.selectedIndex !== -1 && !player.isDead) {
                                return (
                                    <>
                                        <ObjectPlayer
                                            key={player.id}
                                            player={player}
                                            position={
                                                new Vector3(
                                                    player.position[0],
                                                    player.position[1],
                                                    player.position[2]
                                                )
                                            }
                                            modelIndex={player.selectedIndex}
                                        />
                                    </>
                                );
                            } else {
                                return <></>;
                            }
                        }
                    })}
                    <AttackRules />
                </>
            )}
        </>
    );
}
