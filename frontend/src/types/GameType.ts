import { Vector3 } from 'three';

export interface PlayerInitType {
    player: any;
    position: Vector3;
    modelIndex: number;
}
export interface CurrentPlayersInfo {
    id: string;
    selectedCharacterGlbNameIndex: number;
    position: (number | undefined)[];
}
export interface MeInfo {
    id: string;
}
