import './App.css'
import {useState, useEffect} from 'react'
import { createBrowserRouter, RouterProvider, useRouteError, useParams, useLocation } from 'react-router-dom'

const router = createBrowserRouter ([
  { path: "/", element: <h2>Index</h2>, errorElement: <ErrorPage />},
  { path: "/foo", element: <h2>foo</h2>},
  { path: "/sayHi/:name", element: <SayHi />},
  { path: "/sayHi", element: <SayHi />},
  { path: "/GetName", element: <Redirect />},
  { path: "/Meet", element: <ReactiveUrl />}
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

function Redirect(){
  var [name, setName] = useState('')
  function redirectToSayHi(){
    window.location.href = `\\SayHi\\${name}`
  }
  return <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={redirectToSayHi} 
        style={{backgroundColor: 'gray', border: "2px solid white"}}>
        Say HI</button>
  </div>
}

function ReactiveUrl(){
  var location = useLocation()
 var inboundName = new URLSearchParams(location.search).get("name")

  var [name, setName] = useState(inboundName);

  useEffect(()=>{
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('name', name);
    window.history.replaceState(null, null, `?${searchParams.toString()}`)
  }, [name])

  return <div>
    Your name: 
    <input type="text" value={name} onChange={e=>setName(e.target.value)} />

    <h2>well hello, {name}</h2>
  </div>
}

export default App