import React from 'react'

const AppWrap = () => {
  //  이런 식으로 하면은 리액트가 알아서 children에 값을 넣어서 보여줌
  //  재사용성이 훨씬 더 좋아진다.
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://i.ytimg.com/an_webp/XXnMIXBv4EE/mqdefault_6s.webp?du=3000&sqp=CPvYuaoG&rs=AOn4CLA7KG7iv6LEWNX3nLu3nFqwbIYaXw'
          name='bob'
          size={200}
        />
        <p>123312</p>
        <Avatar
          image='https://i.ytimg.com/an_webp/XXnMIXBv4EE/mqdefault_6s.webp?du=3000&sqp=CPvYuaoG&rs=AOn4CLA7KG7iv6LEWNX3nLu3nFqwbIYaXw'
          name='bob'
          size={200}
        />
        <p>안녕하세요</p>
      </Navbar>
    </div>
  )
}

export default AppWrap

function Navbar({ children }) {
  return (
    <header style={{ background: 'yellow' }}>
      {/*  이렇게 하면은 재사용성이 떨어진다
            나는 <p>테그 등을 넣고 싶지만 그 떄마다 변경해야 하기 떄문에
      */}
      {/*<Avatar*/}
      {/*  image={*/}
      {/*    'https://i.ytimg.com/an_webp/XXnMIXBv4EE/mqdefault_6s.webp?du=3000&sqp=CPvYuaoG&rs=AOn4CLA7KG7iv6LEWNX3nLu3nFqwbIYaXw'*/}
      {/*  }*/}
      {/*  name={'bob'}*/}
      {/*  size={200}*/}
      {/*/>*/}
      {children}
    </header>
  )
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  )
}
