import ReactDOM from 'react-dom/client';
import '/src/assets/css/common.css';
import '/src/assets/css/variables.css';
import MainPage from './pages/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectChannelPage from './pages/SelectChannelPage.tsx';
import LobbyPage from './pages/LobbyPage.tsx';
import RoomPage from './pages/RoomPage.tsx';
import GamePage from './pages/GamePage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<MainPage />}></Route>
            <Route
                path="/selectchannel"
                element={<SelectChannelPage />}
            ></Route>
            <Route path="/lobby" element={<LobbyPage />}></Route>
            <Route path="/room" element={<RoomPage />}></Route>
            <Route path="/game" element={<GamePage />}></Route>
        </Routes>
    </BrowserRouter>
);
