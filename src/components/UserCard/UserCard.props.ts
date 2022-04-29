import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { User } from '../../types/types'

export interface UserCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: User
}
