import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Footer from "./components/Footer"

const App = () => {
   return (
      <ThemeProvider>
        <Header />
        <Outlet />
        <Footer/>
      </ThemeProvider>
  )
}

export default App
