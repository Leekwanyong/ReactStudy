import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Videos from './pages/Videos'
import NotFound from './pages/NotFound'
import Root from './pages/Root'
import Home from './pages/Home'
import VideosDetail from './pages/VideosDetail'

function App() {
  //   이런 식으로 변수를 만들어서 사용이 가능하다.
  // 라우터 역할을 담당 새로고침을 하지 않더라도 새로운 컴포너트를 렌더링 해주는 역할
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: '/videos', element: <Videos /> },
        { path: '/videos/:videoId', element: <VideosDetail /> },
        {},
      ],
    },
  ])
  // router 경로를 매칭
  return (
    <RouterProvider router={router}>
      {/*<AppContext />*/}
      {/*<AppWrap />*/}
      {/*<AppForm />*/}
      {/*<AppMentors />*/}
      {/*<AppPerson />*/}
      {/*<AppReducer />*/}
      {/*<AppRemove />*/}
      {/*<AppNumber />*/}
      {/*<AppMentor />*/}
      {/*<AppXY />*/}
      {/*<AppProducts />*/}
      {/*<AppCounter />*/}
      {/*/!**/}
      {/*  click이벤트는 클릭시 나오는 이벤트임 리액트에서는*/}
      {/*  onClick로 하면 된다.*/}
      {/*  이런식으로 버튼 안에서도 할 수 있고*/}
      {/*  onClick={() => {*/}
      {/*    alert('Hello')*/}
      {/*  }}*/}
      {/*  click()로 하면은 안된다. 그러면 함수가 연결이 안되고 실행이 중복됨*/}
      {/**!/*/}
      {/*<button onClick={click}>click</button>*/}
      {/*/!* component 정의 *!/*/}
      {/*/!**/}
      {/*  component에 속성으로 원하는 키와 값을 전달해줄수 있다.*/}
      {/*  객체로 전달된다. 외부로부터 전달된 속성으로부터 UI로 표현해준다.*/}
      {/*  props을 이용하면 동일한 컴포넌트를 재사용 할 수 있다.*/}
      {/**!/*/}
      {/*<Profile*/}
      {/*  img={*/}
      {/*    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'"*/}
      {/*  }*/}
      {/*  name={'James Kim'}*/}
      {/*  title={'프론트엔드 개발자 '}*/}
      {/*  isNew={true}*/}
      {/*/>*/}
      {/*<Profile*/}
      {/*  img={*/}
      {/*    'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'*/}
      {/*  }*/}
      {/*  name={'Anna Young'}*/}
      {/*  title={'백엔드 개발자'}*/}
      {/*/>*/}
      {/*<Profile*/}
      {/*  img={*/}
      {/*    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'*/}
      {/*  }*/}
      {/*  name={'Bob Yu'}*/}
      {/*  title={'프론트엔드 개발자'}*/}
      {/*/>*/}
    </RouterProvider>
  )
}

export default App
