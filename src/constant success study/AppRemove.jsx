import React, { useState } from 'react'

const AppRemove = () => {
  const [array, setArray] = useState(['asd', 'ass2', 'asd'])

  return (
    <div>
      <ul>
        {array.map((array) => (
          <li>{array}</li>
        ))}
      </ul>
      {/* 배열의 특정항목을 제거 할려면 고차함수 filter을 사용*/}
      <button
        onClick={() => {
          const name = prompt('리스트 중에 삭제하고 싶은 이름을 입력해주세요')
          setArray((prev) => [...prev.filter((v, index) => v !== name)])
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default AppRemove
