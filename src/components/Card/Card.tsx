import React from 'react'
import cn from 'classnames'
import { CardProps } from './Card.props'
import styles from './Card.module.css'

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  )
}

export default Card
