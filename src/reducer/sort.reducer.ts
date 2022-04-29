import { SortEnum } from '../components/Sort/Sort.props'
import { User } from '../types/types'

export type SortActions =
  | { type: SortEnum.City }
  | { type: SortEnum.Name }
  | { type: 'reset'; initialState: User[] }
  | { type: 'fetch'; payload: User[] }

export interface SortReducerState {
  sort: SortEnum
  users: User[]
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.City:
      return {
        sort: SortEnum.City,
        users: state.users.sort((a, b) =>
          a.address.city > b.address.city ? 1 : -1
        ),
      }
    case SortEnum.Name:
      return {
        sort: SortEnum.Name,
        users: state.users.sort((a, b) =>
          a.company.name > b.company.name ? 1 : -1
        ),
      }
    case 'fetch':
      return {
        sort: SortEnum.City,
        users: action.payload,
      }
    case 'reset':
      return {
        sort: SortEnum.City,
        users: action.initialState,
      }
    default:
      throw new Error('Неверный тип сортировки')
  }
}
