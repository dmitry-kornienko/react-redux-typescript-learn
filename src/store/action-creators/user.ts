import { UserAction, UserActionTypes } from "../../types/user";
import {Dispatch} from 'redux';
import axios from "axios";

export const fetchUsers = () => {
    // возвращаем новую асинхронную ф-ю, которая в параметрах принимает диспатч
    // типизируем диспатч - импортируем из редакса Dispatch и указываем как тип UserAction
    return async (dispatch: Dispatch<UserAction>) => {
        // для отлавливания потенциальных ошибок оборачиваем все в блок трай кэтч 
        try {
            // передаем в диспатч экшн UserActionTypes.FETCH_USERS
            dispatch({type: UserActionTypes.FETCH_USERS});
            // делаем запрос на сервер с помощью axios и записываем ответ в переменную
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            // в случае успешного запроса передаем в диспатч экшн UserActionTypes.FETCH_USERS_SUCCESS, в пейлоде указываем данные ответа с сервера
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
        } catch(e) {
            // в случае ошибки передаем в диспатч экшн UserActionTypes.FETCH_USERS_ERROR с данными в пэйлоде типа строка
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при загрузке пользователей'});
        }
    }
}