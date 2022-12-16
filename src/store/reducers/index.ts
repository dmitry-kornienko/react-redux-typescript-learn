import {combineReducers} from 'redux';
import { userReducer } from './userReducer';

// создали общий редюсер, который будет в себя их объединять при помощи функции combineReducers из редакса
export const rootReducer = combineReducers({
    user: userReducer,
});

// дефолтный useSelector плохо работает с типами
// при помощи ReturnType получим ТИП РЕДЮСЕРА
export type RootState = ReturnType<typeof rootReducer>