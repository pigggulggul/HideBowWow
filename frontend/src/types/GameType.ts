import { Vector3 } from 'three';

export interface PlayerInitType {
    player: any;
    position: Vector3;
    modelIndex?: number;
}
export interface CurrentPlayersInfo {
    id: string;
    selectedIndex?: number;
    position: number[];
    isDead?: boolean;
    isSeeker?: boolean;
    isFixed?: boolean;
}
export interface MeInfo {
    id: string;
    selectedIndex?: number;
    isDead?: boolean;
    isSeeker?: boolean;
    isFixed?: boolean;
}
export interface RoomInfo {
    isPublic: boolean;
    roomId: string;
    roomMap: string | null;
    roomPassword: string;
    roomPlayers: [];
    roomState: number | null;
    roomTime: number | null;
    roomTitle: string;
}

export interface GuestLoginInfo {
    nickname: string;
}
export interface UserLoginInfo {
    nickname: string;
    password: string;
}
export interface MakeRoomState {
    roomTitle: string;
    roomPassword: string;
    roomAdmin: string;
    isPublic: boolean;
}
export interface EnterRoomState {
    roomId: string;
    roomPassword?: string;
    nickname: string;
}
