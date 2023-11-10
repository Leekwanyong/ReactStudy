import React, { useState } from 'react'

const AppMentor = () => {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: [
      {
        name: 'bob',
        title: '시니어개발자',
      },
      {
        name: '할리',
        title: '시니어개발자',
      },
    ],
  })
  return (
    <div>
      <h1>
        {person.name}는{person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <ul>
        {person.mentor.map((mentor) => (
          <li>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const name = prompt(`이름을 무엇으로 변경할까요?`)
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name },
          }))
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`타이틀을 무엇으로 변경할까요?`)
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title },
          }))
        }}
      >
        멘토 타이틀 바꾸기
      </button>
      <button
        onClick={() => {
          const prevd = prompt(`누구의 이름을?`)
          const current = prompt(`이름을 무엇으로?`)
          setPerson((prev) => ({
            ...prev,
            mentor: prev.mentor.map((mentor) => {
              if (mentor.name === prevd) {
                return { ...mentor, name: current }
              }
              return mentor
            }),
          }))
        }}
      >
        asd
      </button>
      <button
        onClick={() => {
          const name = prompt(`무엇으로 추가할까요?`)
          setPerson((prev) => ({
            ...prev,
            mentor: [...prev.mentor, { name }],
          }))
        }}
      >
        추가하기
      </button>
      <button
        onClick={() => {
          const prevd = prompt(`누구의 이름을 삭제할까요?`)
          setPerson((prev) => ({
            ...prev,
            mentor: prev.mentor.filter((mentor) => mentor.name !== prevd),
          }))
        }}
      >
        삭제하기
      </button>
    </div>
  )
}

export default AppMentor
