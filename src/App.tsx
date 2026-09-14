import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Technologies from './components/technologies/Technologies'
import { Suspense, useState } from 'react'
import type { Itechnologies } from './type/technologiesType'


const technologiesFetch = async ():Promise<Itechnologies[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const technologiesPromise = technologiesFetch();

  const [yourStack, setYourStack] = useState<Itechnologies[]>([]);

  return (
    <>
        <Nav />
        <Banner />
        <Suspense fallback={<h2 className='mx-10'>Loading, please wait...</h2>}>
        <Technologies technologiesPromise={technologiesPromise} yourStack={yourStack}
        setYourStack={setYourStack} />
        </Suspense>
        <Footer />
      

    </>
  )
}

export default App
