import React, { useState } from 'react'

const AppXy = () => {
  // 마우스 좌표는 객체 값으로 관리한다 숫자 값이기 떄문에 값은 숫자로
  // useState의 특성을 사용하여 관리 이전에 상태와 현재상태를 비교하여 업데이트
  const [xy, setXY] = useState({ x: 0, y: 0 })
  // xyEvent는 e.clientX, Y를 사용하여 좌표값을 구하고
  // setXY 두 번쨰 인자에 값을 계속 업데이트를 시키고 변경한다면 따라오게 해주자.
  const xyEvent = (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    setXY({ x: mouseX, y: mouseY })
  }
  return (
    // 근접한 부모에 이벤트리스너를 삽입
    <div className='containerBox' onMouseMove={xyEvent}>
      {/* transform을 이용하여 이동 값을 받자 템플릿 문자열을 사용  */}
      <div
        className='pointer'
        style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
      ></div>
    </div>
  )
}

export default AppXy
