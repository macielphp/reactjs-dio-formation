import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18next/index.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
