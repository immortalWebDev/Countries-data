import { useTheme } from "../hooks/useTheme"
import { Link } from "react-router-dom"

export default function Header() {
  const [isDark, setIsDark] =  useTheme()
  
  return (
    <header className={`header-container ${isDark? 'dark': ''}`}>
      <div className="header-content">
        <h2 className="title">
          <Link to="/">The Nations Database 🌍</Link>
        </h2>
        <p className="theme-changer" onClick={() => {
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }}>
          <i className={`fa-solid fa-${isDark ? 'sun': 'moon'}` }/>
          &nbsp;&nbsp;{isDark? 'Light': 'Dark'} Mode
        </p>
      </div>
    </header>
  )
}
