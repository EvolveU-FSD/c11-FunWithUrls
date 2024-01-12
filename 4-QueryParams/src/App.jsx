import './App.css'
import { createBrowserRouter, RouterProvider, useRouteError, useParams, useLocation } from 'react-router-dom'

const router = createBrowserRouter ([
  { path: "/", element: <h2>Index</h2>, errorElement: <ErrorPage />},
  { path: "/foo", element: <h2>foo</h2>},
  { path: "/sayHi/:name", element: <SayHi />},
  { path: "/sayHi", element: <SayHi />}
])


function App() {
  return (
    <>
      <h1>Router Example</h1>
      <div style={{border: "2px solid white", borderRadius: '5px', padding: '5px'}}>
        <RouterProvider router={router} />
      </div>
    </>
  ) 
}

function ErrorPage(){
  const error = useRouteError();
  console.log(error)

  return <div>
    <h2>Ooops. Unexpected Error</h2>
    <div>{error.statusText || error.message}</div>
  </div>
}

function SayHi(){
  var {name} = useParams();
  var location = useLocation()

  if (name == null)
    name = new URLSearchParams(location.search).get("name")

  return <h2>Hi, {name}</h2>
}

export default App