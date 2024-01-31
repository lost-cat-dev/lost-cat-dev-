import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/pic.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Coming soon</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Go to<code><a href='https://github.com/lost-cat-dev/lost-cat-dev-'>my profile</a></code> to see progress
        </p>
      </div>
    </>
  )
}

export default App
