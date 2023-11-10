import React, { useState } from 'react'

const AppNumber = () => {
  // 배열로 저장
  const [number, setNumber] = useState([0, 0])

  const random = () => {
    // 랜덤 난수를 생성해주는 변수 선언
    const randomNumber = Math.floor(Math.random() * 100)
    // 배열이기 떄문에 기존 배열과 클릭을 했을 떄 추가되는 랜덤 난수를 저장
    setNumber((prev) => [...prev, randomNumber])
  }

  return (
    <div>
      <ul>
        {number.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
      <button onClick={random}>추가하기</button>
    </div>
  )
}

export default AppNumber
