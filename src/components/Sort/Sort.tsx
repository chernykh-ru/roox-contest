import cn from 'classnames'
import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import Button from '../Button/Button'

export const Sort = ({
  sort = SortEnum.Name,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <Button
        appearance='primary'
        id='city'
        onClick={() => setSort(SortEnum.City)}
        className={cn(styles.button, {
          [styles.active]: sort === SortEnum.City,
        })}
      >
        по городу
      </Button>
      <Button
        appearance='primary'
        id='name'
        onClick={() => setSort(SortEnum.Name)}
        className={cn(styles.button, {
          [styles.active]: sort === SortEnum.Name,
        })}
      >
        по компании
      </Button>
    </div>
  )
}
