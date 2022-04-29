import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './pages/UserProfile/UserProfile'
import UserList from './pages/UserList/UserList'
import NotFound from './pages/NotFound/NotFound'
import { UsersProvider } from './context/UserContext'

function App() {
  return (
    <div>
      <UsersProvider>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/users' element={<UserList />} />
          <Route path='user/:id' element={<UserProfile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UsersProvider>
    </div>
  )
}

export default App
