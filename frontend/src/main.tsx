import ReactDOM from 'react-dom/client';
import '/src/assets/css/common.css';
import MainPage from './pages/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<MainPage />}></Route>
        </Routes>
    </BrowserRouter>
);
