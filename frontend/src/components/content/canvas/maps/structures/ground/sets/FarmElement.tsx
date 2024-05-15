import { Alley_stones } from "../elements/Alley_stones";
import { Axe } from "../elements/Axe";
import { Barn } from "../elements/Barn";
import { Barrel } from "../elements/Barrel";
import { Barrel_2 } from "../elements/Barrel_2";
import { Bench_2 } from "../elements/Bench_2";
import { Bridge_1 } from "../elements/Bridge_1";
import { Bridge_2 } from "../elements/Bridge_2";
import { Building_1 } from "../elements/Building_1";
import { Building_2 } from "../elements/Building_2";
import { Building_3 } from "../elements/Building_3";
import { Bush } from "../elements/Bush";
import { Bush_1 } from "../elements/Bush_1";
import { Bush_2 } from "../elements/Bush_2";
import { Bush_3 } from "../elements/Bush_3";
import { Bush_4 } from "../elements/Bush_4";
import { Bush_5 } from "../elements/Bush_5";
import { Bush_6 } from "../elements/Bush_6";
import { Carrot } from "../elements/Carrot";
import { Chair } from "../elements/Chair";
import { Chalk_Board } from "../elements/Chalk_Board";
import { Chicken_coop } from "../elements/Chicken_coop";
import { Dog_house } from "../elements/Dog_house";
import { Dumpster } from "../elements/Dumpster";
import { Fence } from "../elements/Fence";
import { Flower_pot } from "../elements/Flower_pot";
import { Fork_2 } from "../elements/Fork_2";
import { Grass } from "../elements/Grass";
import { Grave_1 } from "../elements/Grave_1";
import { Grave_2 } from "../elements/Grave_2";
import { Hay_1 } from "../elements/Hay_1";
import { Hay_2 } from "../elements/Hay_2";
import { House_1 } from "../elements/House_1";
import { House_2 } from "../elements/House_2";
import { House_3 } from "../elements/House_3";
import { House_4 } from "../elements/House_4";
import { House_5 } from "../elements/House_5";
import { House_6 } from "../elements/House_6";
import { House_7 } from "../elements/House_7";
import { Light_pole_1 } from "../elements/Light_pole_1";
import { Light_pole_2 } from "../elements/Light_pole_2";
import { Logs } from "../elements/Logs";
import { Pig } from "../elements/Pig";
import { Pumpkin } from "../elements/Pumpkin";
import { Road_1 } from "../elements/Road_1";
import { Road_2 } from "../elements/Road_2";
import { Rock } from "../elements/Rock";
import { Scythe } from "../elements/Scythe";
import { Seesaw } from "../elements/Seesaw";
import { Sheep } from "../elements/Sheep";
import { Swing } from "../elements/Swing";
import { Table_1 } from "../elements/Table_1";
import { Table_2 } from "../elements/Table_2";
import { Traffic_light_1 } from "../elements/Traffic_light_1";
import { Traffic_light_2 } from "../elements/Traffic_light_2";
import { Tree_1 } from "../elements/Tree_1";
import { Tree_2 } from "../elements/Tree_2";
import { Tree_4 } from "../elements/Tree_4";
import { Tree_5 } from "../elements/Tree_5";
import { Tree_6 } from "../elements/Tree_6";
import { Tree_7 } from "../elements/Tree_7";
import { Tree_9 } from "../elements/Tree_9";
import { Tree_house_trunk } from "../elements/Tree_house_trunk";
import { Tree_trunk } from "../elements/Tree_trunk";
import { Wheelbarrow } from "../elements/Wheelbarrow";
import { Wooden_box } from "../elements/Wooden_box";

const randomNumber = import.meta.env.VITE_REACT_RANDOM_NUMBER;

export function FarmElement() {
  return (
    <>
      {/* --------------------------------<교차로>-------------------------------------- */}
      {/* 9<=x<=84 y=0 */}
      {/* <Road_1
        position={[0, 0.5, 85]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      /> 
      <Road_1
        position={[0, 0.5, 84.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, 81.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />*/}
      <Road_1
        position={[0, 0.5, 72.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, 63.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, 54.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, 45.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, 36.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, 27.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, 18.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, 9]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      {/* 원점 x=0, y=0 */}
      <Road_2
        position={[0, 0.5, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      {/* -9<=x<=-84 y=0 */}
      {/* <Road_1
        position={[0, 0.5, -85]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      /> 
      <Road_1
        position={[0, 0.5, -84.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, -81.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />*/}
      <Road_1
        position={[0, 0.5, -72.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, -63.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, -54.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, -45.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, -36.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, -27.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, -18.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Road_1
        position={[0, 0.5, -9]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      {/* x=0 -84<=y<=-9 */}
      {/* <Road_1 position={[-85, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[-81.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      <Road_1 position={[-72.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[-63.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[-54.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[-45.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[-36.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[-27.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[-18.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[-9, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />

      {/* x=0 9<=y<=84 */}
      {/* <Road_1 position={[-85, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[81.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      <Road_1 position={[72.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[63.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[54.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[45.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[36.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[27.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[18.5, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Road_1 position={[9, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} />

      {/* --------------------------------<1사분면 x>0, y>0 : 농장>-------------------------------------- */}

      <Tree_4 position={[10, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, 20]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, 30]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, 40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, 50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, 60]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, 70]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Tree_4 position={[10, 0.5, 80]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <Tree_4 position={[10, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[20, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[30, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[40, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[50, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[60, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[70, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Tree_4 position={[80, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <Barn
        position={[30, 0.5, 30]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Barn
        position={[30, 0.5, 60]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Chicken_coop
        position={[50, 0.5, 50]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Chicken_coop
        position={[50, 0.5, 55]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Chicken_coop
        position={[50, 0.5, 60]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Logs
        position={[44, 0.5, 40]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Logs
        position={[44, 0.5, 42]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Logs
        position={[40, 0.5, 41]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Logs
        position={[40, 0.5, 43]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Pig
        position={[30, 0.5, 43]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
      />
      <Pig
        position={[30, 0.5, 45]}
        rotation={[-Math.PI / 2, 0, Math.PI / 32]}
      />
      <Pig position={[28, 0.5, 47]} rotation={[-Math.PI / 2, 0, Math.PI / 8]} />
      <Pig position={[26, 0.5, 43]} rotation={[-Math.PI / 2, 0, Math.PI / 6]} />
      <Pig
        position={[25, 0.5, 44]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
      />
      <Pig
        position={[25, 0.5, 47]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
      />
      <Pig position={[26, 0.5, 45]} rotation={[-Math.PI / 2, 0, Math.PI / 6]} />

      <Fence
        position={[28, 0.5, 41]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Fence
        position={[28, 0.5, 50]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Fence
        position={[32.5, 0.5, 45.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Fence
        position={[23.5, 0.5, 45.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      <Bush_4 position={[20, 0.5, 20]} rotation={[-Math.PI / 2, 0, Math.PI]} />

      <Fence
        position={[45, 0.5, 20]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Fence
        position={[45, 0.5, 29]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Fence
        position={[49.5, 0.5, 24.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Fence
        position={[40.5, 0.5, 24.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Sheep
        position={[47, 0.5, 24]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
      />
      <Sheep
        position={[47, 0.5, 26]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Sheep position={[45, 0.5, 26]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
      <Sheep position={[44, 0.5, 24]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
      <Sheep
        position={[44.5, 0.5, 22]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <Sheep
        position={[43, 0.5, 28]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
      />
      <Sheep
        position={[43, 0.5, 22]}
        rotation={[-Math.PI / 2, 0, Math.PI / 4]}
      />
      <Sheep
        position={[42, 0.5, 24]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      {/* --------------------------------<2사분면 x<0, y>0: 주거지역>-------------------------------------- */}

      <Tree_4 position={[10, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, -20]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, -30]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, -60]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[10, 0.5, -70]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Tree_4 position={[10, 0.5, -80]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <Tree_4 position={[10, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[20, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[30, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[40, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[50, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[60, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[70, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Tree_4 position={[80, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <House_3 position={[30, 0.5, -20]} rotation={[-Math.PI / 2, 0, 0]} />
      <House_4 position={[50, 0.5, -20]} rotation={[-Math.PI / 2, 0, 0]} />
      <House_5
        position={[30, 0.5, -40]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <House_7
        position={[30, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Bridge_1
        position={[50, 0.5, -40]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Bush_4
        position={[45, 0.5, -40]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Bush_4
        position={[55, 0.5, -40]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Swing
        position={[55, 0.5, -50]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Seesaw position={[45, 0.5, -55]} rotation={[-Math.PI / 2, 0, 0]} />

      <Table_1 position={[40, 0.5, -51]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_1 position={[40, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_1 position={[40, 0.5, -49]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_1 position={[39, 0.5, -49]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_1 position={[39, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_1 position={[39, 0.5, -51]} rotation={[-Math.PI / 2, 0, 0]} />

      <Tree_house_trunk
        position={[60, 0.5, -65]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      <Bench_2
        position={[50, 0.5, -65]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Bench_2
        position={[48, 0.5, -65]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      <Bench_2
        position={[46, 0.5, -65]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
      <Bench_2
        position={[44, 0.5, -65]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />

      {/* 앞쪽 벤치 */}

      <Bench_2
        position={[30, 0.5, -50]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <Bench_2
        position={[30, 0.5, -52]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />

      <Light_pole_1
        position={[30, 0.5, -48]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />

      {/* --------------------------------<3사분면 x<0, y<0 : 도시 및 카페>-------------------------------------- */}

      <Tree_4 position={[-10, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, -20]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, -30]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, -60]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, -70]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Tree_4 position={[-10, 0.5, -80]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <Tree_4 position={[-10, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-20, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-30, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-40, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-50, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-60, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-70, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Tree_4 position={[-80, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <Building_2 position={[-30, 0.5, -30]} rotation={[-Math.PI / 2, 0, 0]} />
      <Building_3 position={[-40, 0.5, -30]} rotation={[-Math.PI / 2, 0, 0]} />
      <Building_2 position={[-60, 0.5, -30]} rotation={[-Math.PI / 2, 0, 0]} />

      {/* 카페 */}
      <Building_3
        position={[-50, 0.5, -30]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <Chalk_Board position={[-52, 0.5, -35]} rotation={[-Math.PI / 2, 0, 0]} />

      {/* 첫번째줄  */}
      <Table_2 position={[-30, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-34, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-38, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-42, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-46, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-50, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-54, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />

      <Chair position={[-31, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-35, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-39, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-43, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-47, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-51, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-55, 0.5, -40]} rotation={[-Math.PI / 2, 0, 0]} />

      <Chair position={[-29, 0.5, -40]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-33, 0.5, -40]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-37, 0.5, -40]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-41, 0.5, -40]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-45, 0.5, -40]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-49, 0.5, -40]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-53, 0.5, -40]} rotation={[-Math.PI / 2, 0, Math.PI]} />

      {/* 두번째줄  */}
      <Table_2 position={[-30, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-34, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-38, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-42, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-46, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-50, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-54, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />

      <Chair position={[-31, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-35, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-39, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-43, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-47, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-51, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-55, 0.5, -45]} rotation={[-Math.PI / 2, 0, 0]} />

      <Chair position={[-29, 0.5, -45]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-33, 0.5, -45]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-37, 0.5, -45]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-41, 0.5, -45]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-45, 0.5, -45]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-49, 0.5, -45]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-53, 0.5, -45]} rotation={[-Math.PI / 2, 0, Math.PI]} />

      {/* 세번째줄  */}
      <Table_2 position={[-30, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-34, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-38, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-42, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-46, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-50, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Table_2 position={[-54, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />

      <Chair position={[-31, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-35, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-39, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-43, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-47, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-51, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Chair position={[-55, 0.5, -50]} rotation={[-Math.PI / 2, 0, 0]} />

      <Chair position={[-29, 0.5, -50]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-33, 0.5, -50]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-37, 0.5, -50]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-41, 0.5, -50]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-45, 0.5, -50]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-49, 0.5, -50]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <Chair position={[-53, 0.5, -50]} rotation={[-Math.PI / 2, 0, Math.PI]} />

      {/* 정원 부분 */}

      {/* 00째 세로 */}
      <Bush_1
        position={[-24, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-26, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-30, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-34, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-38, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-42, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-46, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-50, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-54, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-58, 0.5, -56]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 0째 세로 */}
      <Bush_2
        position={[-24, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-26, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-30, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-34, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-38, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-42, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-46, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-50, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-54, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-58, 0.5, -58]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 1째 세로 */}
      <Bush_1
        position={[-24, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-26, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-30, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* <Bush_2
        position={[-34, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-38, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      /> */}
      <Bush_2
        position={[-42, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-46, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      <Bush_2
        position={[-50, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-54, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-58, 0.5, -60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 2째 세로 */}
      <Bush_2
        position={[-24, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-26, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* <Bush_2
        position={[-30, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-34, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      <Bush_2
        position={[-38, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-42, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      /> */}

      <Bush_2
        position={[-46, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-50, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      <Bush_2
        position={[-54, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-58, 0.5, -62]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 3째 세로 */}
      <Bush_1
        position={[-24, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-26, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* <Bush_1
        position={[-30, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-34, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-38, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-42, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-46, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      /> */}

      <Bush_2
        position={[-50, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-54, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-58, 0.5, -64]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 4째 세로 */}
      <Bush_2
        position={[-24, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-26, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-30, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* <Bush_1
        position={[-34, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      <Bush_2
        position={[-38, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-42, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      <Bush_2
        position={[-46, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-50, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      /> */}
      <Bush_2
        position={[-54, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-58, 0.5, -66]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 5째 세로 */}
      <Bush_1
        position={[-24, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-26, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* <Bush_1
        position={[-30, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-34, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-38, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-42, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-46, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      /> */}

      <Bush_2
        position={[-50, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-54, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-58, 0.5, -68]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 6째 세로 */}
      <Bush_2
        position={[-24, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-26, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* <Bush_2
        position={[-30, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-34, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      <Bush_2
        position={[-38, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-42, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      /> */}

      <Bush_2
        position={[-46, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-50, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-54, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-58, 0.5, -70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 7째 세로 */}
      <Bush_1
        position={[-24, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-26, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-30, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* <Bush_2
        position={[-34, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-38, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      /> */}
      <Bush_2
        position={[-42, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-46, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      <Bush_2
        position={[-50, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-54, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-58, 0.5, -72]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      {/* 8째 세로 */}
      <Bush_2
        position={[-24, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-26, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-30, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-34, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-38, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-42, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-46, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-50, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-54, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-58, 0.5, -74]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      {/* 9째 세로 */}
      <Bush_1
        position={[-24, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-26, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-30, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-34, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-38, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-42, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-46, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-50, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_1
        position={[-54, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <Bush_2
        position={[-58, 0.5, -76]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />

      {/* --------------------------------<4사분면 x>0, y<0 : 숲 속>-------------------------------------- */}
      <Tree_4 position={[-10, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, 20]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, 30]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, 40]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, 50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, 60]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-10, 0.5, 70]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Tree_4 position={[-10, 0.5, -80]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <Tree_4 position={[-10, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-20, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-30, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-40, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-50, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-60, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      <Tree_4 position={[-70, 0.5, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <Tree_4 position={[-80, 0.5, -10]} rotation={[-Math.PI / 2, 0, 0]} /> */}

      <House_6
        position={[-25, 0.5, 30]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Dog_house
        position={[-25, 0.5, 20]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Fence
        position={[-16, 0.5, 15]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Fence
        position={[-25, 0.5, 15]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Fence
        position={[-34, 0.5, 15]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Fence
        position={[-39, 0.5, 20]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Fence
        position={[-39, 0.5, 29]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Fence
        position={[-39, 0.5, 38]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Fence
        position={[-34, 0.5, 42]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Fence
        position={[-25, 0.5, 42]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Fence
        position={[-16, 0.5, 42]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <Fence
        position={[-11, 0.5, 19]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Fence
        position={[-11, 0.5, 28]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Fence
        position={[-11, 0.5, 37]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />

      {Array.from({ length: 21 }, (_, i) => -15 - i).map((x) =>
        Array.from({ length: 21 }, (_, i) => 70 - i).map((z) => (
          <Grass
            position={[x, 0.5, z]}
            rotation={[-Math.PI / 2, 0, Math.PI / 1]}
          />
        ))
      )}

      {Array.from({ length: 6 }, (_, i) => -15 - i * 4).map((x) => (
        <Bush
          position={[x, 0.5, 75]}
          rotation={[-Math.PI / 2, 0, Math.PI / 1]}
        />
      ))}

      <Hay_1
        position={[-40, 0.5, 65]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Hay_2
        position={[-40, 0.5, 55]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Hay_2
        position={[-40, 0.5, 53]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />

      <Tree_house_trunk
        position={[-65, 0.5, 65]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />

      {Array.from({ length: 7 }, (_, i) => -45 - i * 5).map((x) =>
        Array.from({ length: 12 }, (_, i) => 70 - i * 5).map((z) =>
          Math.random() < 0.2 ? (
            <Tree_4
              position={[x, 0.5, z]}
              rotation={[-Math.PI / 2, 0, Math.PI / 1]}
            />
          ) : Math.random() < 0.25 ? (
            <Tree_9
              position={[x, 0.5, z]}
              rotation={[-Math.PI / 2, 0, Math.PI / 1]}
            />
          ) : Math.random() < 0.3 ? (
            <Tree_trunk
              position={[x, 0.5, z]}
              rotation={[-Math.PI / 2, 0, Math.PI / 1]}
            />
          ) : (
            <></>
          )
        )
      )}

      <Axe
        position={[-50, 0.5, 10]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Axe
        position={[-35, 0.5, 45]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Barrel
        position={[-25, 1.9, 45]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Barrel
        position={[-30, 1.9, 10]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Logs
        position={[-65, 0.5, 10]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Logs
        position={[-55, 0.5, 75]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1]}
      />
      <Bench_2
        position={[-10, 0.5, 50]}
        rotation={[-Math.PI / 2, 0, Math.PI / 0.5]}
      />
      <Bench_2
        position={[-10, 0.5, 55]}
        rotation={[-Math.PI / 2, 0, Math.PI / 0.5]}
      />
      <Bench_2
        position={[-10, 0.5, 60]}
        rotation={[-Math.PI / 2, 0, Math.PI / 0.5]}
      />
      <Bench_2
        position={[-10, 0.5, 65]}
        rotation={[-Math.PI / 2, 0, Math.PI / 0.5]}
      />
    </>
  );
}
