import React from 'react'
import styles from './UserCard.module.css'
import Card from '../Card/Card'
import { UserCardProps } from './UserCard.props'
import { Link } from 'react-router-dom'

const UserCard = ({ user }: UserCardProps) => {
  const { name, address, company, id } = user
  return (
    <Card className={styles.cardWrapper} key={id}>
      <div className={styles.info}>
        <p>
          <span className={styles.label}>ФИО:</span> {name}
        </p>
        <p>
          <span className={styles.label}>город:</span> {address.city}
        </p>
        <p>
          <span className={styles.label}>компания:</span> {company.name}
        </p>
      </div>
      <div className={styles.description}>
        <Link className={styles.link} to={`../user/${id}`}>
          Подробнее
        </Link>
      </div>
    </Card>
  )
}

export default UserCard
