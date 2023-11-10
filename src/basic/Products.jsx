import React, { useEffect, useState } from 'react'

const Products = () => {
  // const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState(false)
  const [Loading, setLoading] = useState(null)
  const change = () => setChecked((prev) => !prev)
  // 이렇게 하면은 계속 호출한다. state떄문에 벼로 안 좋은 방법이다.
  // fetch(`data/products.json`)
  //   .then((res) => res.json())
  //   .then((data) => setProducts(data))

  // 이 방법도 마찬가지다 deps에 []가 없으면 마찬가지다. []가 있어야 한 번만 실행한다.
  useEffect(() => {
    setError(false)
    setLoading(false)
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      //   console.log('error', err) 사용자에게 안 보임
      .catch((err) => setError(true))
      .finally(() => {
        setLoading(true)
      })
    // 리턴은 이용해 deps를 끝내주기;
    return () => {
      console.log('청소를 완료했습니다.')
    }
    // []안에는 어떤 값이 변경 될 떄마다 업데이트를 실행 할 수 있다.
    // 그러면 변경 될 떄마다 비동기 통신을 통하여 값을 가져온다.
    // useEffect는 무언가 무거운 일을 한 번 싫행할 떄에 유용한다. 또한 처음으로 네트워크 통신을 할 떄 유용한다.
  }, [checked])
  if (Loading) {
    return <p>...Loading</p>
  }

  if (error) {
    return <p>{error}</p>
  }
  return (
    <div>
      <input type='checkbox' value={checked} onClick={change} />
      <label htmlFor='checkbox'>Show only Sale!</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/*<button onClick={() => setCount((prev) => prev + 1)}>{count}</button>*/}
    </div>
  )
}

export default Products
