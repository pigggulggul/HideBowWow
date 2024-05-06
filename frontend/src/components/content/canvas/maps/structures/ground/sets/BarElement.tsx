import { Armchair_1 } from '../elements/Armchair_1';
import { Armchair_2 } from '../elements/Armchair_2';
import { Basket_1 } from '../elements/Basket_1';
import { Bath_1 } from '../elements/Bath_1';
import { Bed_1 } from '../elements/Bed_1';
import { Bed_2 } from '../elements/Bed_2';
import { Bed_3 } from '../elements/Bed_3';
import { Book_1 } from '../elements/Book_1';
import { Book_2 } from '../elements/Book_2';
import { Book_3 } from '../elements/Book_3';
import { Book_4 } from '../elements/Book_4';
import { Book_5 } from '../elements/Book_5';
import { Bottle_1 } from '../elements/Bottle_1';
import { Cabinet_1 } from '../elements/Cabinet_1';
import { Carpet_1 } from '../elements/Carpet_1';
import { Carpet_2 } from '../elements/Carpet_2';
import { Chair_brown } from '../elements/Chair_brown';
import { Chair_orange } from '../elements/Chair_orange';
import { Chair_white } from '../elements/Chair_white';
import { Clock_1 } from '../elements/Clock_1';
import { Coffee_drink } from '../elements/Coffee_drink';
import { Cup_1 } from '../elements/Cup_1';
import { Doll_Polar } from '../elements/Doll_Polar';
import { Doll_bear } from '../elements/Doll_bear';
import { Doll_mushroom_1 } from '../elements/Doll_mushroom_1';
import { Doll_mushroom_2 } from '../elements/Doll_mushroom_2';
import { Doll_pig } from '../elements/Doll_pig';
import { Doll_rabbit } from '../elements/Doll_rabbit';
import { Drawer_blue_1 } from '../elements/Drawer_blue_1';
import { Drawer_brown_1 } from '../elements/Drawer_brown_1';
import { Drawer_brown_2 } from '../elements/Drawer_brown_2';
import { Drawer_brown_3 } from '../elements/Drawer_brown_3';
import { Drawer_brown_4 } from '../elements/Drawer_brown_4';
import { Drawer_brown_5 } from '../elements/Drawer_brown_5';
import { Drawer_pink_1 } from '../elements/Drawer_pink_1';
import { Flower_1 } from '../elements/Flower_1';
import { Flower_10 } from '../elements/Flower_10';
import { Flower_11 } from '../elements/Flower_11';
import { Flower_12 } from '../elements/Flower_12';
import { Flower_13 } from '../elements/Flower_13';
import { Flower_2 } from '../elements/Flower_2';
import { Flower_3 } from '../elements/Flower_3';
import { Flower_4 } from '../elements/Flower_4';
import { Flower_5 } from '../elements/Flower_5';
import { Flower_6 } from '../elements/Flower_6';
import { Flower_7 } from '../elements/Flower_7';
import { Flower_8 } from '../elements/Flower_8';
import { Flower_9 } from '../elements/Flower_9';
import { Fork } from '../elements/Fork';
import { Frame_1 } from '../elements/Frame_1';
import { Frame_2 } from '../elements/Frame_2';
import { Frame_3 } from '../elements/Frame_3';
import { Frame_5 } from '../elements/Frame_5';
import { Frame_6 } from '../elements/Frame_6';
import { Frame_7 } from '../elements/Frame_7';
import { Frame_8 } from '../elements/Frame_8';
import { Ladder_brown } from '../elements/Ladder_brown';
import { Ladder_white } from '../elements/Ladder_white';
import { Lamp_1 } from '../elements/Lamp_1';
import { Lamp_2 } from '../elements/Lamp_2';
import { Lamp_3 } from '../elements/Lamp_3';
import { Lamp_4 } from '../elements/Lamp_4';
import { Lamp_5 } from '../elements/Lamp_5';
import { LongTable_white } from '../elements/LongTable_white';
import { Mannequin_1 } from '../elements/Mannequin_1';
import { Meet_full } from '../elements/Meet_full';
import { Meet_half } from '../elements/Meet_half';
import { Mirror_1 } from '../elements/Mirror_1';
import { Ottoman_1 } from '../elements/Ottoman_1';
import { Ottoman_2 } from '../elements/Ottoman_2';
import { Ottoman_3 } from '../elements/Ottoman_3';
import { Plate_1 } from '../elements/Plate_1';
import { Plate_2 } from '../elements/Plate_2';
import { Pot_full } from '../elements/Pot_full';
import { Pot_orange } from '../elements/Pot_orange';
import { Pot_pink } from '../elements/Pot_pink';
import { Present_1 } from '../elements/Present_1';
import { Present_2 } from '../elements/Present_2';
import { Present_3 } from '../elements/Present_3';
import { Puzzle_1 } from '../elements/Puzzle_1';
import { Refrigerator } from '../elements/Refrigerator';
import { RoundTable_brown } from '../elements/RoundTable_brown';
import { RoundTable_orange } from '../elements/RoundTable_orange';
import { Sandwich_1 } from '../elements/Sandwich_1';
import { Sausages_1 } from '../elements/Sausages_1';
import { Shelve_brown } from '../elements/Shelve_brown';
import { Sofa_1 } from '../elements/Sofa_1';
import { Sofa_2 } from '../elements/Sofa_2';
import { Tv } from '../elements/Tv';
import { Vase_1 } from '../elements/Vase_1';
import { Vase_2 } from '../elements/Vase_2';
import { Vase_4 } from '../elements/Vase_4';
import { Vase_5 } from '../elements/Vase_5';
import { Window_1 } from '../elements/Window_1';
import { Window_10 } from '../elements/Window_10';
import { Window_11 } from '../elements/Window_11';
import { Window_2 } from '../elements/Window_2';
import { Window_3 } from '../elements/Window_3';
import { Window_4 } from '../elements/Window_4';
import { Window_5 } from '../elements/Window_5';
import { Window_6 } from '../elements/Window_6';
import { Window_7 } from '../elements/Window_7';
import { Window_8 } from '../elements/Window_8';
import { Window_9 } from '../elements/Window_9';

export function BarElement() {
    return (
        <>
            {/* 카페테리아 */}
            <Drawer_brown_1
                position={[20, 1, -33]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Drawer_brown_2
                position={[20, 1, -30.3]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Drawer_brown_3
                position={[20, 1, -27.8]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            {/* 카페테리아 가운데 선반 */}
            <Pot_pink
                position={[21, 2.4, -32.8]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_full
                position={[21, 2.25, -28.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_half
                position={[21, 2.25, -27.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_half
                position={[21, 2.25, -26.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_half
                position={[21, 2.25, -25.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_half
                position={[21, 2.25, -24.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_full
                position={[21, 2.25, -23.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_full
                position={[21, 2.25, -22.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_full
                position={[21, 2.25, -21.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Drawer_brown_4
                position={[20, 1, -25.6]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Drawer_brown_5
                position={[20, 1, -22.8]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Refrigerator
                position={[33, 2.8, -18.5]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Drawer_brown_1
                position={[33, 1, -33.2]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Drawer_brown_2
                position={[33, 1, -30.4]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Drawer_brown_5
                position={[33, 1, -26.8]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Drawer_brown_5
                position={[33, 1, -22.3]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Shelve_brown
                position={[34, 5, -22.8]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Shelve_brown
                position={[34, 5, -30.8]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            {/* 카페테리아 냉장고쪽 선반 */}
            <Meet_full
                position={[33, 2.4, -23.8]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            {/* 카페테리아 냉장고쪽 위 선반 */}
            <Pot_pink
                position={[34, 5.45, -24.8]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_pink
                position={[34, 5.45, -22.8]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_pink
                position={[34, 5.45, -20.8]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_orange
                position={[34, 5.45, -29.0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_orange
                position={[34, 5.45, -32.0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_pink
                position={[34, 5.45, -30.5]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            {/* 카페테리아 냉장고쪽 아래 선반 */}
            <Pot_pink
                position={[33, 2.4, -21.8]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_orange
                position={[33, 2.4, -25.0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_orange
                position={[33, 2.4, -26.1]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_orange
                position={[33, 2.4, -27.3]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_pink
                position={[33, 2.4, -33.0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            {/* 냉장고 주방 쪽 바닥 */}
            <Ladder_brown
                position={[26, 2.4, -30.0]}
                rotation={[Math.PI / 2, 0, 1]}
            />
            <Ladder_white
                position={[26, 1.5, -20.0]}
                rotation={[Math.PI / 2, 0, -1]}
            />
            {/* 오른쪽 냉장고 */}
            <Refrigerator
                position={[33, 2.8, 3.1]}
                rotation={[Math.PI / 2, 0, Math.PI / 1]}
            />
            <Shelve_brown
                position={[25, 5, 3.1]}
                rotation={[Math.PI / 2, 0, Math.PI / 1]}
            />
            <Drawer_brown_1
                position={[22, 1, 6]}
                rotation={[Math.PI / 2, 0, -Math.PI / 1]}
            />

            {/* 테이블 */}
            <RoundTable_brown
                position={[12, 1, -22]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Doll_pig
                position={[12, 2.8, -30]}
                rotation={[Math.PI / 2, 0, Math.PI / 1]}
            />
            <Chair_brown
                position={[15, 0.8, -22]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[9, 0.8, -22]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <RoundTable_brown
                position={[12, 1, -30]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Doll_pig
                position={[12, 2.8, -22]}
                rotation={[Math.PI / 2, 0, Math.PI / 3]}
            />
            <Chair_brown
                position={[15, 0.8, -30]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[9, 0.8, -30]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Doll_pig
                position={[0, 2.8, -22]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <RoundTable_brown
                position={[0, 1, -22]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Chair_brown
                position={[3, 0.8, -22]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-3, 0.8, -22]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <RoundTable_brown
                position={[0, 1, -30]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_full
                position={[0, 2.3, -30]}
                rotation={[Math.PI / 2, 0, Math.PI / 1]}
            />
            <Chair_brown
                position={[3, 0.8, -30]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-3, 0.8, -30]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <RoundTable_brown
                position={[-12, 1, -22]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Meet_half
                position={[-12, 2.3, -22]}
                rotation={[Math.PI / 2, 0, Math.PI / 1]}
            />
            <Meet_half
                position={[-11, 2.3, -22]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Meet_half
                position={[-13, 2.3, -22]}
                rotation={[Math.PI / 2, 0, Math.PI / 3]}
            />
            <Chair_brown
                position={[-9, 0.8, -22]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-15, 0.8, -22]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <RoundTable_brown
                position={[-12, 1, -30]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Pot_pink
                position={[-12, 2.3, -30]}
                rotation={[Math.PI / 2, 0, Math.PI / 3]}
            />
            <Chair_brown
                position={[-9, 0.8, -30]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-15, 0.8, -30]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Ladder_brown
                position={[-12, 1, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Ladder_brown
                position={[-38, 1, 15]}
                rotation={[Math.PI / 2, -0, 0]}
            />
            <Ladder_brown
                position={[30, 1, -12.8]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Ladder_white
                position={[-26, 1, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Ladder_white
                position={[-24, 1, -20]}
                rotation={[Math.PI / 2, -0, 0]}
            />
            {/* 우측 하얀테이블들 */}
            <LongTable_white
                position={[0, 1, -10]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[3, 0.8, -8]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[3, 0.8, -10]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[3, 0.8, -12]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-3, 0.8, -8]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[-3, 0.8, -10]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[-3, 0.8, -12]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <LongTable_white
                position={[0, 1, -3]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[3, 0.8, -1]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[3, 0.8, -3]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[3, 0.8, -5]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-3, 0.8, -1]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[-3, 0.8, -3]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[-3, 0.8, -5]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <LongTable_white
                position={[-15, 1, -10]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[18, 0.8, -8]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[18, 0.8, -10]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[18, 0.8, -12]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[12, 0.8, -8]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[12, 0.8, -10]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[12, 0.8, -12]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <LongTable_white
                position={[15, 1, -3]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[18, 0.8, -1]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[18, 0.8, -3]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[18, 0.8, -5]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[12, 0.8, -1]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[12, 0.8, -3]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[12, 0.8, -5]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <LongTable_white
                position={[15, 1, -10]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-12, 0.8, -8]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-12, 0.8, -10]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-12, 0.8, -12]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-18, 0.8, -8]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[-18, 0.8, -10]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[-18, 0.8, -12]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <LongTable_white
                position={[-15, 1, -3]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-12, 0.8, -1]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-12, 0.8, -3]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-12, 0.8, -5]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_brown
                position={[-18, 0.8, -1]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[-18, 0.8, -3]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Chair_brown
                position={[-18, 0.8, -5]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />

            {/* 회의실 */}
            {/* 병실 */}
            <Vase_1 position={[3, 0.75, 27]} rotation={[Math.PI / 2, 0, 0]} />
            <Vase_2 position={[3, 0.75, 73]} rotation={[Math.PI / 2, 0, 0]} />
            <Vase_1 position={[-23, 0.75, 53]} rotation={[Math.PI / 2, 0, 0]} />
            <Vase_2
                position={[-23, 0.75, 47]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Vase_4
                position={[-26, 4, 29]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Bed_1
                position={[-21.5, 1, 40]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Bed_1
                position={[-21.5, 1, 60]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Bed_2
                position={[1, 1, 40]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Bed_2
                position={[1, 1, 60]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Drawer_blue_1
                position={[3, 1, 44.3]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Drawer_blue_1
                position={[3, 1, 55.5]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Drawer_blue_1
                position={[-23, 1, 44.3]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Drawer_blue_1
                position={[-23, 1, 55.5]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />

            <RoundTable_brown
                position={[-10, 1, 50]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Chair_white
                position={[-7, 0.8, 50]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_white
                position={[-13, 0.8, 50]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Tv
                position={[-11.8, 3.2, 73]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Drawer_blue_1
                position={[-11.5, 1, 73]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Drawer_pink_1
                position={[-6.7, 1.1, 73]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Drawer_pink_1
                position={[-13.4, 1.1, 73]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />

            <Book_2 position={[0, 2.6, 39]} rotation={[Math.PI / 2, 0, 0]} />
            <Book_2
                position={[3.8, 2.6, 54.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Book_1
                position={[3.8, 2.5, 56.4]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Book_4
                position={[3.6, 2.4, 45]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Book_5
                position={[3.6, 2.4, 43.6]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />

            <Book_2 position={[0, 2.6, 39]} rotation={[Math.PI / 2, 0, 0]} />
            <Book_2
                position={[-24, 2.6, 54.6]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Book_1
                position={[-24, 2.5, 56.4]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Book_4
                position={[-24, 2.4, 45]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Book_5
                position={[-24, 2.4, 43.6]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            {/* 병실 */}

            {/* 놀이방 */}
            <Bed_2 position={[8, 1, 80]} rotation={[Math.PI / 2, 0, Math.PI]} />
            <Bed_2
                position={[15, 1, 80]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Bed_2
                position={[22, 1, 80]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <RoundTable_brown
                position={[22, 1, 60]}
                rotation={[Math.PI / 2, 0, 0]}
            />

            <Doll_pig
                position={[22, 2.8, 60]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Sofa_1
                position={[31, 0.8, 80]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Sofa_2
                position={[8, 0.8, 57.2]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Armchair_1
                position={[8, 0.8, 50]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Doll_pig
                position={[32, 2.8, 50]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Ladder_brown
                position={[32, 0.8, 50]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <Book_1
                position={[32, 1, 52]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Book_4
                position={[32, 1, 46]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Book_5
                position={[32, 2, 46]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Vase_1
                position={[32, 1, 40]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Vase_2
                position={[32, 1, 37]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Doll_pig
                position={[22, 0.8, 40]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Doll_pig
                position={[21, 0.8, 40]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Doll_pig
                position={[21.5, 1.8, 40]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Drawer_pink_1
                position={[32, 1.3, 60]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Tv
                position={[32, 3.7, 60]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Drawer_pink_1
                position={[32, 1.3, 63]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />

            <Drawer_pink_1
                position={[32, 1.3, 57]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />

            {/* 놀이방 */}

            {/* 카페 복도 */}
            <Armchair_1
                position={[-50, 2, -25]}
                rotation={[Math.PI / 2, 0, 0]}
            />

            <Vase_5 position={[-45, 3, -20]} rotation={[Math.PI / 2, 0, 0]} />
            <Vase_2
                position={[-45, 1, -17]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Vase_2 position={[-45, 1, -13]} rotation={[Math.PI / 2, 0, 0]} />
            <Vase_5 position={[-45, 3, -10]} rotation={[Math.PI / 2, 0, 0]} />
            <Vase_5 position={[-45, 3, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <Vase_5 position={[-45, 3, 10]} rotation={[Math.PI / 2, 0, 0]} />

            <Frame_1
                position={[-45, 5, -34.5]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Vase_1 position={[-37, 1, -25]} rotation={[Math.PI / 2, 0, 0]} />
            <Chair_white
                position={[-37, 1, -23]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <RoundTable_orange
                position={[-38, 1, -19.5]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Chair_white
                position={[-37, 1, -16]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Vase_1 position={[-37, 1, -27]} rotation={[Math.PI / 2, 0, 0]} />

            {/* 카페 복도 */}

            {/* 병실 복도 */}
            <Frame_1 position={[-30, 5, 5.8]} rotation={[Math.PI / 2, 0, 0]} />
            <Frame_2 position={[-20, 5, 5.8]} rotation={[Math.PI / 2, 0, 0]} />
            <Frame_3 position={[-10, 5, 5.8]} rotation={[Math.PI / 2, 0, 0]} />
            <Frame_5 position={[0, 5, 5.8]} rotation={[Math.PI / 2, 0, 0]} />
            <Frame_5 position={[10, 5, 5.8]} rotation={[Math.PI / 2, 0, 0]} />
            <Book_4 position={[10, 0.7, 6]} rotation={[Math.PI / 2, 0, 0]} />
            <Meet_full
                position={[15, 0.3, 7]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />

            <Vase_1 position={[33, 0.8, 13]} rotation={[Math.PI / 2, 0, 0]} />
            <Ladder_brown
                position={[33, 0.8, 10]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Sofa_2
                position={[33, 0.8, 20]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />

            <Vase_5 position={[7, 3, 13]} rotation={[Math.PI / 2, 0, 0]} />
            <Ottoman_1 position={[5, 0.8, 13]} rotation={[Math.PI / 2, 0, 0]} />
            <Ottoman_1 position={[1, 0.8, 13]} rotation={[Math.PI / 2, 0, 0]} />
            <Ottoman_2 position={[3, 0.8, 13]} rotation={[Math.PI / 2, 0, 0]} />

            <Vase_2 position={[-8, 0.8, 17]} rotation={[Math.PI / 2, 0, 0]} />
            <Ottoman_1
                position={[-10, 0.8, 17]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Ottoman_1
                position={[-14, 0.8, 17]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Ottoman_2
                position={[-12, 0.8, 17]}
                rotation={[Math.PI / 2, 0, 0]}
            />

            <Vase_1 position={[-23, 0.8, 13]} rotation={[Math.PI / 2, 0, 0]} />
            <Ottoman_1
                position={[-25, 0.8, 13]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Ottoman_1
                position={[-29, 0.8, 13]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Ottoman_2
                position={[-27, 0.8, 13]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Ottoman_2
                position={[-20, 0.8, 13]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <Book_1 position={[-25, 0.8, 8]} rotation={[Math.PI / 2, 0, 0]} />
            <Doll_Polar
                position={[-25, 1.65, 13]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />

            <Book_5
                position={[-27, 2.5, 23.5]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Book_3
                position={[-25, 2.5, 23]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Book_2
                position={[-25, 3.6, 23.5]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <LongTable_white
                position={[-25, 0.8, 22.93]}
                rotation={[Math.PI / 2, 0, 0]}
            />

            <Drawer_blue_1
                position={[15, 0.8, 23]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Drawer_brown_1
                position={[12, 0.8, 25.8]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Drawer_brown_2
                position={[9, 0.8, 25.8]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
            <Vase_2
                position={[6, 0.8, 23]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />

            <Doll_pig position={[20, 0.8, 18]} rotation={[Math.PI / 2, 0, 0]} />
            <Sofa_1
                position={[20, 0.8, 7]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />

            {/* 병실 복도 */}
        </>
    );
}
