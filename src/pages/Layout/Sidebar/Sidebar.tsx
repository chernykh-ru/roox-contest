import React, { useContext, useEffect } from 'react'
import cn from 'classnames'
import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props'
import { Sort } from '../../../components/Sort/Sort'
import { SortEnum } from '../../../components/Sort/Sort.props'
import { IUsersContext, UsersContext } from '../../../context/UserContext'
import Button from '../../../components/Button/Button'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const { users, sort, dispatch } = useContext(UsersContext) as IUsersContext

  useEffect(() => {
    dispatch({ type: 'reset', initialState: users })
  }, [users, dispatch])

  const { pathname } = useLocation()

  const setSort = (sort: SortEnum) => {
    dispatch({ type: sort })
  }

  return (
    <div className={cn(styles.sidebar, className)} {...props} {...props}>
      <div>
        <h2 className={styles.title}>Сортировка</h2>
        <Sort sort={sort} setSort={setSort} />
      </div>
      {pathname !== '/users' && (
        <Link className={styles.link} to={'/users'}>
          <Button appearance='primary'>пользователи</Button>
        </Link>
      )}
    </div>
  )
}

export default Sidebar
