import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter ([
  { path: "/", element: <h2>Main Page</h2>},
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

export default App
