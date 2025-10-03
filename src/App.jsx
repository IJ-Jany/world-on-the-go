
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {
  
const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


  return (
    <>
    <Suspense fallback={<p>All the Countries are Loading</p>}>
      <Countries countryPromise={countryPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App
