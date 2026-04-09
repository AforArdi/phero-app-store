import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { route } from './Routes/Routes'
import AppInstallProvider from './components/context/AppInstallContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppInstallProvider>
      <RouterProvider router={route}></RouterProvider>
    </AppInstallProvider>
  </StrictMode>
)
