import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component1 from './ Component/ Component1.jsx'
import Component2 from './ Component/ Component2.jsx'
import Component3 from './ Component/ Component3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1 />
    <Component2 />
    <Component3 />
    {/* <App /> */}
  
    </StrictMode>,
)

