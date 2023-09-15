import { useState, useEffect } from 'react'
import RickMorty from './assets/Rick-And-Morty-Emblem.png'

function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)

  return (
    <>

      <div className="vh-100">

        <div className=" h-50 d-flex justify-content-center">
          <img src={RickMorty} className='h-100 img-fluid mt' alt="Logo" />
        </div>

        <div className="h-25  d-flex align-items-center justify-content-center">
          
            <button onClick={() => setIsOn(!isOn)}>
              {isOn ? 'Encendido' : 'Apagado'}
            </button>
          
        </div>
        
        <div className="h-25  d-flex align-items-center justify-content-center">
          
        <p>
            Web oficial
          </p>
          
        </div>
        
      </div>
      {/* <div className='container-fluid bg-warning h-50'>

          <div>
          
          </div>

        <div className="row">
          <div>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>

          
        </div>

      </div> */}

    </>
  )
}

export default App
