import React, { useState } from 'react'

const Counter = ({ total, onAdd }) => {
  // useState 상태관리 첫 번쨰 인자는 화면에 보여지는 부분
  // 두 번쨰 인자는 함수를 업데이트 해줄 값 setCounter(counter + 1) 한 번에 값을 업데이트만 된다.
  // 이전 상태와 현재 상태를 비교하여 증가를 시킨다.
  // counter++; 을 할 시에 const는 상수다 오류 뜬다.
  const [counter, setCounter] = useState(0)

  return (
    <div className='container'>
      <div className='counter'>
        <span className='number'>
          {counter}/ {total}
        </span>
        <button
          className='button'
          onClick={() => {
            // 이 방법은 4씩 증가해야 할 것 같지만 실제로는 1씩 증가한다. 그 이유는
            // 스냅 샷이 되는데(캡쳐)가 되는데 그 상태 즉 0인 상태를 기억하기 떄문에 1씩 증가한다.
            //      변경사항을 모아서 한 번에 일괄처리 한다. 비동기로 작동한다.
            //    비동기란 변경이 될 떄마다 그 떄 그 떄 처리한다.
            //   성능의 향상을 위해서 setState를 연속 호출하면 배치 처리하여 한 번에 렌더링하도록 하였다.
            //   setCounter(counter + 1)
            //   setCounter(counter + 1)
            //   setCounter(counter + 1)
            //   setCounter(counter + 1)
            // 이런 식으로 콜백함수로 받아서 처리를 한다면 이전 상태와 현재의 상태를 비교해서 값을 증가 시키기
            // 떄문에 원하는 대로 숫자를 증가 시킬 수 있다.
            setCounter((prev) => prev + 1)
          }}
        >
          Add +
        </button>
      </div>
    </div>
  )
}

export default Counter
