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
import { useDispatch, useSelector } from 'react-redux';
import { CurrentPlayersInfo } from '../../../../types/GameType';

export function RootMap() {
    const characterSelectFinished = useRecoilValue(CharacterSelectFinishedAtom);
    const [players] = useRecoilState(PlayerAtom);
    const camera = useThree((three) => three.camera);
    const controls = useRef<any>(null);
    const selectedCharacterGlbNameIndex = useRecoilValue(
        SelectedCharacterGlbNameIndexAtom
    );

    const currentRoom = useSelector(
        (state: any) => state.reduxFlag.userSlice.currentRoom
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (!controls.current) return;
        camera.position.set(14, 14, 14);
        controls.current.target.set(0, 0, 0);
    }, [camera.position]);
    return (
        <>
            <>
                <GroundElements />
                {currentRoom.roomPlayers.map((player: CurrentPlayersInfo) => {
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
                                    modelIndex={selectedCharacterGlbNameIndex}
                                />
                            </>
                        );
                    } else {
                        if (player.selectedIndex !== null && !player.isDead) {
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
                                        selectedIndex={player.selectedIndex}
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
        </>
    );
}
