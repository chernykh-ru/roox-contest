import React from 'react'
import cn from 'classnames'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import { currentYear } from '../../../helpers/getDate'

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div> chernykh.ru &#169; {currentYear}</div>
      <a href='https://www.chernykh.ru'>Пользовательское соглашение</a>
    </footer>
  )
}

export default Footer
