import React, { useState } from 'react'
import Counter from './Counter'

const AppCounter = () => {
  const [counter, setCounter] = useState(0)
  const click = () => setCounter((prev) => prev + 1)
  return (
    <div>
      <div>
        Total Count: {counter} {counter > 10 ? '🚗' : '🚓'}
      </div>
      <Counter total={counter} onAdd={click} />
      <Counter total={counter} onAdd={click} />
    </div>
  )
}

export default AppCounter
