import {createContext, useState} from 'react'

// 내부에 공유하길 원하는 데이터의 초깃값을 넣어두어야함 createContext()는
// value 객체다.
export const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const toggleBtn = () => {
    setDarkMode((dark) => !dark)
  }

  // useContext의 주의사항은 value의 값이 달라지면 useContext을 쓰고 있는 모든 컴포넌트가 리렌더링 됨.
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleBtn }}>
      {children}
    </DarkModeContext.Provider>
  )
}
