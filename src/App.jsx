import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Link from './pages/Link'
import RedirectLink from './pages/RedirectLink'
import UrlProvider from './Context'
import RequireAuth from './components/RequireAuth'
import { ThemeProvider } from './components/ThemeProvider'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/dashboard',
        element: 
        <RequireAuth>
          <Dashboard />
        </RequireAuth>,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/link/:id',
        element: 
        <RequireAuth>
          <Link />
        </RequireAuth>,
      },
      {
        path: 'redirect/:id',
        element: <RedirectLink />,
      },
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UrlProvider>
        <RouterProvider router={router}/>
      </UrlProvider>
    </ThemeProvider>
  )
}

export default App
