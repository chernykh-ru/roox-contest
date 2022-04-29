import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import cn from 'classnames'
import { User } from '../../types/types'
import styles from './UserForm.module.css'
import Button from '../Button/Button'

interface IFormInputs {
  name: string
  username: string
  email: string
  street: string
  city: string
  zipcode: number
  phone: string
  website: string
  comment?: string
}

export function UserForm({
  user,
  readOnly,
}: {
  user: User
  readOnly: boolean
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    clearErrors()
    console.log('Result JSON:', JSON.stringify(data))
  }

  const {
    name,
    username,
    email,
    address: { street, city, zipcode },
    phone,
    website,
  } = user

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Name</label>
          <input
            className={cn(styles.input, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.name,
            })}
            readOnly={readOnly}
            defaultValue={name}
            {...register('name', { required: true, maxLength: 30 })}
          />

          {errors.name && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>User name</label>
          <input
            className={cn(styles.input, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.username,
            })}
            readOnly={readOnly}
            defaultValue={username}
            {...register('username', { required: true, maxLength: 30 })}
          />

          {errors.username && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>E-mail</label>
          <input
            className={cn(styles.input, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.email,
            })}
            readOnly={readOnly}
            defaultValue={email}
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors.email && (
            <span className={styles.errorMessage}>Wrong email</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>Street</label>
          <input
            className={cn(styles.input, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.street,
            })}
            readOnly={readOnly}
            defaultValue={street}
            {...register('street', { required: true, maxLength: 30 })}
          />

          {errors.street && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>City</label>
          <input
            className={cn(styles.input, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.city,
            })}
            readOnly={readOnly}
            defaultValue={city}
            {...register('city', { required: true, maxLength: 30 })}
          />

          {errors.city && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>Zip code</label>
          <input
            className={cn(styles.input, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.zipcode,
            })}
            readOnly={readOnly}
            defaultValue={zipcode}
            {...register('zipcode', { required: true, maxLength: 10 })}
          />

          {errors.zipcode && (
            <span className={styles.errorMessage}>Check this field</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>Phone</label>
          <input
            className={cn(styles.input, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.phone,
            })}
            readOnly={readOnly}
            defaultValue={phone}
            {...register('phone', { required: true, maxLength: 20 })}
          />

          {errors.phone && (
            <span className={styles.errorMessage}>Check this field</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>Website</label>
          <input
            className={cn(styles.input, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.website,
            })}
            readOnly={readOnly}
            defaultValue={website}
            {...register('website', { required: true, maxLength: 30 })}
          />

          {errors.website && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>Comment</label>
          <textarea
            className={cn(styles.textarea, {
              [styles.readonly]: readOnly,
              [styles.error]: errors.comment,
            })}
            readOnly={readOnly}
            {...register('comment', { required: false, maxLength: 300 })}
          />

          {errors.comment && (
            <span className={styles.errorMessage}>This field is required</span>
          )}
        </div>
      </form>
      <div className={styles.footerWrapper}>
        <Button
          className={cn(styles.button, {
            [styles.disabled]: readOnly,
          })}
          appearance='action'
          disabled={readOnly}
          type='submit'
          onClick={() => handleSubmit(onSubmit)()}
        >
          Отправить
        </Button>
      </div>
    </div>
  )
}
