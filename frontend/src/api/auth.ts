import localAxios from '../components/utils/http-common';
import { GuestLoginInfo, UserLoginInfo } from '../types/GameType';

const local = localAxios();

/**로그인 */
export async function guestLogin(nickname: GuestLoginInfo) {
    return await local.post(`/api/member-service/guest`, nickname);
}

/**로그아웃 */
export async function userLogin(loginInfo: UserLoginInfo) {
    return await local.post(`/api/member-service/login`, loginInfo);
}
