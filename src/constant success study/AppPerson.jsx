import React, { useReducer } from 'react'
import { personReducer } from '../reducer/person-reducer'

const AppPerson = () => {
  // const [person, setPerson] = useState({
  //   name: '엘리',
  //   title: '개발자',
  //   mentor: [
  //     {
  //       name: 'bob',
  //       title: '시니어개발자',
  //     },
  //     {
  //       name: 'job',
  //       title: '시니어개발자',
  //     },
  //   ],
  // })
  const [person, dispatch] = useReducer(personReducer, initialPerson)
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <ul>
        {person.mentor.map((person) => (
          <li>
            {person.name}
            {person.title}
          </li>
        ))}
      </ul>
      {/* 이거는 문법이 맞지않음 조심!
        setPerson((person) => ({
        ...person,
        mentors: person.mentors.map((mentor) => ({
        if(mentor.name === name) {}
                    }))
          })
      */}
      <button
        onClick={() => {
          const name = prompt('누구의 이름을 바꿀까요?')
          const current = prompt('이름을 무엇으로 바꾸고 싶어요?')
          // setPerson((person) => ({
          //   ...person,
          //   // ...perosn.mentor.map으로 안하는 이유는 map으로 이미 풀고 있기 떄문이다.
          //   mentor: person.mentor.map((mentor) => {
          //     if (mentor.name === name) {
          //       return { ...mentor, name: current }
          //     }
          //
          //     return mentor
          //   }),
          // }))
          dispatch({ type: 'update', name, current })
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt('추가하고 싶은 이름을 입력하세요')
          const title = prompt('추가하고 싶은 타이틀을 입력해주세요')
          // mentor안에 배열이기 떄문에 ...perosn.mentor전개 연산을 이용해 객체를 복사하고 기존 값을 건들지 않고
          // 새롭게 추가가 된다면 그 값들만 추가해준다. 여기서 배열안에 객체이기 때문에 {}을 안에 써준다.
          // setPerson((person) => ({
          //   ...person,
          //   mentor: [...person.mentor, { name, title }],
          // }))
          dispatch({ type: 'add', name, title })
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const name = prompt('누구를 삭제하고 싶어요?')
          // 이 것도 위에와 마찬가지 대신 고차함수 filter를 사용
          // setPerson((person) => ({
          //   ...person,
          //   mentor: [...person.mentor.filter((ment) => ment.name !== name)],
          // }))
          dispatch({ type: 'delete', name })
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  )
}

export default AppPerson

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentor: [
    {
      name: 'bob',
      title: '시니어개발자',
    },
    {
      name: 'job',
      title: '시니어개발자',
    },
  ],
}
