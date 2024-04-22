import { atom, selector } from 'recoil';
import { CurrentPlayersInfo, MeInfo } from '../types/GameType';

// 내정보
export const MeAtom = atom<MeInfo>({
    key: 'MeAtom',
    default: undefined,
});

// 캐릭터 선택 flag
export const CharacterSelectFinishedAtom = atom({
    key: 'CharacterSelectFinishedAtom',
    default: false,
});

// 무슨 캐릭터 선택했는지
export const SelectedCharacterGlbNameIndexAtom = atom({
    key: 'SelectedCharacterGlbNameIndexAtom',
    default: 0,
});

// 현재 있는 플레이어 정보
export const PlayerAtom = atom<CurrentPlayersInfo[]>({
    key: 'PlayerAtom',
    default: [],
});

// export const PlayGroundStructuresBoundingBoxAtom = atom({
//     key: 'PlayGroundStructuresBoundingBoxAtom',
//     default: [],
// });

// export const PlayGroundStructuresFloorPlaneCornersSelecter = selector({
//     key: 'PlayGroundStructuresFloorPlaneCornersSelecter',
//     get: ({ get }) => {
//         const pb = get(PlayGroundStructuresBoundingBoxAtom);
//         return pb.map((item: any) => {
//             return {
//                 name: item.name,
//                 corners: [
//                     {
//                         x: item.box.max.x + item.position.x,
//                         z: item.box.max.z + item.position.z,
//                     },
//                     {
//                         x: item.box.max.x + item.position.x,
//                         z: item.box.min.z + item.position.z,
//                     },
//                     {
//                         x: item.box.min.x + item.position.x,
//                         z: item.box.min.z + item.position.z,
//                     },
//                     {
//                         x: item.box.min.x + item.position.x,
//                         z: item.box.max.z + item.position.z,
//                     },
//                 ],
//                 position: item.position,
//             };
//         });
//     },
// });
