import React, { useState } from 'react'

const AppForm = () => {
  // React의 철학은 모든 UI업데이틑 상태 변경을 통해서 업데이트 되어야함.
  // 입력 폼 같은 거는 UI상으로 바로 업데이트 되기 떄문에 => 통제되지 않는 컴포넌트다.
  // 리액트 컴포넌트 상태와 똑같이 매칭되도록 하는게 중요하다. 리액트 훅 useState를 사용하자
  // 비슷한 데이터를 관리 할 떄는 객체로 묶어서 관리하자
  const [form, setForm] = useState({ name: '', email: '' })

  const handleChange = (e) => {
    // 구조 분해 할당 사용 객체의 속성(키)을 해체하여 그 값을 개별 변수에 담고
    // e.target을 사용해 현재 이벤트가 발생한 대상의 객체를 가리켜서 name,email이 일치하면 받음
    const { name, value } = e.target
    // 객체이기 떄문에 ...form기존의 값과 입력받는 값을 업데이트
    // []을 이용하여 value값을 업데이트
    setForm({ ...form, [name]: value })
    // 수 많은 속성들이 있음 변수 이름을 똑같아야함.
    console.dir(e.target)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default AppForm
