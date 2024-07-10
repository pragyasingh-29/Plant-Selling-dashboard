import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';

//Import React router dom
import{ createBrowserRouter, RouterProvider} from 'react-router-dom'

//lets  create a router

const router = createBrowserRouter([

  {
    path:'/',
    element:<div><Login /></div>
    
  },

  {
    path:'/register',
    element:<div><Register /></div>
    
  },

  {
    path:'/Dashboard',
    element:<div><Dashboard /></div>

  }

]);

function App() {

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
