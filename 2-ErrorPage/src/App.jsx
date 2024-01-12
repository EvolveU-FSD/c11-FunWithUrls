import './App.css'
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom'

const router = createBrowserRouter ([
  { path: "/", element: <h2>Main Page</h2>, errorElement: <ErrorPage />},
  { path: "/content", element: <h2>My Content</h2>},
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

export default App