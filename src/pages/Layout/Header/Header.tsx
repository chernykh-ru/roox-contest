import React from 'react'
import cn from 'classnames'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <h1 className={styles.title}>Roox Contest</h1>
    </header>
  )
}

export default Header
