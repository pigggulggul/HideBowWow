import localAxios from '../components/utils/http-common';
import {
    EnterRoomState,
    GuestLoginInfo,
    MakeRoomState,
    UserLoginInfo,
} from '../types/GameType';

const local = localAxios();

/**GET: 방 리스트 조회 */
export async function roomList() {
    return await local.get(`/api/game-service/rooms`);
}

/**POST: 방생성 */
export async function roomMake(roomInfo: MakeRoomState) {
    return await local.post(`/api/game-service/rooms`, roomInfo);
}
/**GET: 방 조회 */
export async function getRoom(id: string) {
    return await local.get(`/api/game-service/rooms/${id}`);
}

/**POST: 방 입장 */
export async function enterRoom(checkInfo: EnterRoomState) {
    return await local.post(`/api/game-service/rooms/enter`, checkInfo);
}
