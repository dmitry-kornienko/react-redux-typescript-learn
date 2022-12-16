import { UserState, UserAction, UserActionTypes } from "../../types/user"

// создаем дефолтное состояние и указываем тип этого состояния
const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

// создаем редюсер, который принимает стэйт и экшн, возвращает состояние с типами UserState
// типизируем экшен
export const userReducer = (state = initialState, action: UserAction): UserState => {
    //конструкция свитч кейс, которая в зависимости от типа экшена будет вызывать тот или иной кейс
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}