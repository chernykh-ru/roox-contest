import React, { useReducer, createContext, FC, ReactNode } from 'react'
import { SortEnum } from '../components/Sort/Sort.props'
import { SortActions, sortReducer } from '../reducer/sort.reducer'
import { User } from '../types/types'

export interface IUsersContext {
  users: User[]
  sort: SortEnum
  dispatch: React.Dispatch<SortActions>
}

interface IInitialState {
  users: User[]
  sort: SortEnum.City
}

export const UsersContext = createContext<IUsersContext | null>(null)

export const UsersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: IInitialState = {
    users: [],
    sort: SortEnum.City,
  }

  const [{ users, sort }, dispatch] = useReducer(sortReducer, initialState)

  return (
    <UsersContext.Provider value={{ users, sort, dispatch }}>
      {children}
    </UsersContext.Provider>
  )
}
