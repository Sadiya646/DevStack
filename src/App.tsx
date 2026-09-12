
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Technologys from './components/technologys/Technologys'
import type { technologyType } from './components/types/technologyType'
import Footer from './components/Footer'



const technologiesFetch=async(): Promise<technologyType[]>=>{
  const res=await fetch('/data.json')
  const data= await res.json()
  return data;
}
function App() {
  const technologiesPromise=technologiesFetch()

  return (
    <>
<Navbar/>
<Banner/>
<Suspense fallback={ <h1>Loading..</h1>}>
  <Technologys technologiesPromise={technologiesPromise} />
</Suspense>

<Footer></Footer>
  
    </>
  )
}

export default App
