import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import styles from './NotFound.module.css'

const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <h1>Oops!</h1>
      <p>404 - Page Not Found!</p>
      <Link to='/'>
        <Button appearance='primary'>Back To Home</Button>
      </Link>
    </div>
  )
}

export default NotFound
