import { atom, selector } from 'recoil';
import { CurrentPlayersInfo, MeInfo } from '../types/GameType';

export const MeAtom = atom<MeInfo>({
    key: 'MeAtom',
    default: undefined,
});
export const CharacterSelectFinishedAtom = atom({
    key: 'CharacterSelectFinishedAtom',
    default: false,
});

export const SelectedCharacterGlbNameIndexAtom = atom({
    key: 'SelectedCharacterGlbNameIndexAtom',
    default: 0,
});

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
