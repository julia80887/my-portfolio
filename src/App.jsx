import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1>Julia Bulat</h1>
          <p>
            Recent UofT graduate looking for a new full-time opportunity!
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me!</h2>
          <ul>
            <li>
              <a href="https://github.com/julia80887" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/julia-bulat-2895116a/" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
