import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './components/Profile'
import { ShoppingList } from './components/ShoppingList'
import { Counter } from './components/Counter'
import { MyButtonTwo } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const handleCounter = ()=>{
    setCount(count + 1);
  }

  return (
    <>
      <div className="card-container">
      <Profile />
      
        
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
      </div>
      <hr size={5} height={3} color='grocery' />
<div className='row'>
  <ShoppingList />
</div>
<hr size={5} height={3} color='grocery' />

<div className='row'>
  <Counter />
</div>
<hr size={5} height={3} color='grocery' />
<div className='row'>
  <MyButtonTwo count={count} onClick={handleCounter} />&nbsp;

  <MyButtonTwo count={count} onClick={handleCounter} />
</div>

    </>
  )
}

export default App
