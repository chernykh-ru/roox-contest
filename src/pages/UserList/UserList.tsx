import React, { FC, useEffect, useContext } from 'react'
import styles from './UserList.module.css'
import { fetchUsers } from '../../api/api'
import Spinner from '../../components/Spinner/Spinner'
import { withLayout } from '../Layout/Layout'
import UserCard from '../../components/UserCard/UserCard'
import { IUsersContext, UsersContext } from '../../context/UserContext'

const UserList: FC = () => {
  const { users, dispatch } = useContext(UsersContext) as IUsersContext

  useEffect(() => {
    async function http() {
      const data = await fetchUsers()
      if (typeof data !== 'undefined') {
        dispatch({ type: 'fetch', payload: data })
      }
    }
    http()
  }, [dispatch])

  if (!users) {
    return <Spinner />
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Список пользователей</h1>
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
      {users && (
        <p className={styles.quantity}>Найдено {users.length} пользователей</p>
      )}
    </div>
  )
}
export default withLayout(UserList)
