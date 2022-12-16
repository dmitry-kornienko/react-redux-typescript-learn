import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

export const UserList: FC = () => {
    // используем свой хук для получения типизированного состояния
    const { users } = useTypedSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers())
    }, [])

  return (
    <div>
      {users.map(user =>
        <div key={user.id}>{user.name}</div>)}
    </div>
  )
}
