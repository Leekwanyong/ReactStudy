import React, { useContext } from 'react'
import { DarkModeContext, DarkModeProvider } from './DarkModeContext'

const AppContext = () => {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  )
}

export default AppContext

function Header() {
  return <header>Header</header>
}

function Main() {
  return (
    <main>
      Main
      <Profile />
      <Profile />
    </main>
  )
}

function Profile() {
  return (
    <div>
      Profile
      <User />
      Products
      <Products />
    </div>
  )
}

function User() {
  return <div>User</div>
}

function Products() {
  //    DarkModeContext 연결
  const { darkMode, toggleBtn } = useContext(DarkModeContext)
  return (
    <div>
      Product Detail
      <p>
        DarkMode: <span>{darkMode.toString()}</span>
      </p>
      <button
        onClick={() => {
          toggleBtn()
        }}
      >
        Toggle
      </button>
    </div>
  )
}

function Footer() {
  return <div>Footer</div>
}
