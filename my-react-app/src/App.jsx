import { useState } from 'react'
import roshniPhoto from '/roshni.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={roshniPhoto} className="logo" alt="Roshni photo" />
        </a>
      </div>
      <h1>1 Ti Sourire</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
