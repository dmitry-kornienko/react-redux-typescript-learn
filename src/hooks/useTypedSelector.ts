import { TypedUseSelectorHook, useSelector } from "react-redux";
import {RootState} from '../store/reducers';


// создаем свой хук, который будет работать с типизированным useSelector
// указываем тип хука как TypedUseSelectorHook, который импортируется из реакт-редакс
// и параметром передаем RootState, который получали из редюсера
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;