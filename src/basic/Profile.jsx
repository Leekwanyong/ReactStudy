import React from 'react'

const Profile = (props) => {
  return (
    <div className='profile'>
      <img alt='photo' className='photo' src={props.img} />
      <h1>{props.name}</h1>
      {/* 단축평가로 간단하게 만들기 로지컬 연산자 */}
      {props.isNew && <span className='new'>true</span>}
      <p>{props.title}</p>
    </div>
  )
}

export default Profile
