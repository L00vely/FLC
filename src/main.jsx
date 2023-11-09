import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={ theme }>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter> 
)
