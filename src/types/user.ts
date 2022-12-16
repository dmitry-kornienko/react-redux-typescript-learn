// описываем тип СОСТОЯНИЯ
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

// создаем перечесление, которое содержит в себе все типы экшенов
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

// создаем для каждого экшена отдельный интерфейс (описываем типы данных)
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

// объединяем все типы экшенов в один. Теперь UserAction может принимать один из трех типов, еоторые мы описали
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;

