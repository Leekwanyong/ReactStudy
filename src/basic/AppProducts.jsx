import React, { useState } from 'react'
import Products from './Products'
import { useQueryClient } from '@tanstack/react-query'

const AppProducts = () => {
  const [showProducts, setShowProducts] = useState(false)
  const client = useQueryClient()
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>
        {/**/}
        Toggle
      </button>
      {/*  특정한 정보를 업데이트 할 시 키에 한 해서 새로고침을 할수 있다. */}
      <button onClick={() => client.invalidateQueries(['products'])}>
        invalidateQueries
      </button>
    </div>
  )
}

export default AppProducts
