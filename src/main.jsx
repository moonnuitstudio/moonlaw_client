import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import { ThemeProvider } from "@mui/material/styles"

import ThemeApp from "./ThemeApp"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeApp}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
