import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import'./index.css';
import App from './App.jsx'
// import Header from './components/Header.jsx'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Header /> */}
  </StrictMode>,
)
