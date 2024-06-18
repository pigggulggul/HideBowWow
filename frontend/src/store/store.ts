import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from './user-slice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['reduxflag'],
};

const rootSlice = combineReducers({
    userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootSlice);

const store = configureStore({
    reducer: {
        reduxFlag: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        // 사용자 정의 객체등에서 직렬화가 힘들때 경고를 하는 구문을 해제하는 미들웨어 설정
        getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);
export { store, persistor };
