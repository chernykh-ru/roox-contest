import { User } from '../types/types'

export const fetchUsers = async (): Promise<User[] | undefined> => {
  const api = 'https://jsonplaceholder.typicode.com/users'
  try {
    const response = await fetch(api)
    if (!response.ok) {
      throw new Error(`Could not fetch users, received ${response.status}`)
    } // Catch response was successful (status in the range 200-299) or not
    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } // Logged error in dummy db
  }
}

export const fetchUser = async (id: number): Promise<User | undefined> => {
  const api = `https://jsonplaceholder.typicode.com/users/${id}`
  try {
    const response = await fetch(api)
    if (!response.ok) {
      throw new Error(`Could not fetch users, received ${response.status}`)
    } // Catch response was successful (status in the range 200-299) or not
    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } // Logged error in dummy db
  }
}
