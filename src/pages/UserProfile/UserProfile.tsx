import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cn from 'classnames'
import { fetchUser } from '../../api/api'
import Button from '../../components/Button/Button'
import Spinner from '../../components/Spinner/Spinner'
import { User } from '../../types/types'
import styles from './UserProfile.module.css'
import { withLayout } from '../Layout/Layout'
import { UserProfileProps } from './UserProfile.props'
import { UserForm } from '../../components/UserForm/UserForm'

const UserProfile = ({
  className,
  ...props
}: UserProfileProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true)
  const [readOnly, setReadOnly] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)
  let { id } = useParams()

  useEffect(() => {
    async function http() {
      const data = await fetchUser(Number(id))
      if (typeof data !== 'undefined') {
        setUser(data)
        setLoading(false)
      }
    }
    http()
  }, [id])

  const handleReadOnly = () => {
    setReadOnly((prev) => !prev)
  }

  if (loading || !user) {
    return <Spinner />
  }

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.header}>
        <h1 className={styles.title}>Профиль пользователя</h1>
        <Button appearance='primary' onClick={handleReadOnly}>
          Редактировать
        </Button>
      </div>
      <div>
        <UserForm user={user} readOnly={readOnly} />
      </div>
    </div>
  )
}

export default withLayout(UserProfile)
