import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes.jsx'
import Roots from './roots/Roots.jsx'


export const AppContext=createContext([]);

const promisedata=fetch('/App.json')
.then(res=>res.json())


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext.Provider value={promisedata}>
    <RouterProvider router={router}></RouterProvider>
    </AppContext.Provider>
  </StrictMode>,
)
