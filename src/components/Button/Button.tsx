import React from 'react'
import cn from 'classnames'
import { ButtonProps } from './Button.props'
import styles from './Button.module.css'

const Button = ({
  children,
  appearance,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: appearance === 'primary',
          [styles.action]: appearance === 'action',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
