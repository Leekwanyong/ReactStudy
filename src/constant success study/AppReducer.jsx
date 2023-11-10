import React, { useState } from 'react'

const AppReducer = () => {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: {
      name: 'bob',
      title: '시니어개발자',
    },
  })
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentors.name} ({person.mentors.title})
      </p>
      <button
        onClick={() => {
          const name = prompt('멘토 이름 바꾸기')
          // 구조 분해 할당 이용
          setPerson((person) => ({
            ...person,
            mentors: {
              // 렉시컬환경 떄문에 이렇게 써야 한다. 아니면
              // ...person, name 이렇게 하면은 변경은 되지만 title은 그 위에 있는 개발자를 가져옴
              // 렉시컬환경을 신경 쓰자
              ...person.mentors,
              name,
            },
          }))
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt('멘토 타이틀 바꾸기')
          setPerson((person) => ({
            ...person,
            mentors: { ...person.mentors, title },
          }))
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  )
}

export default AppReducer
