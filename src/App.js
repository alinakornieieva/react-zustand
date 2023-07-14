import Recipes from './components/Recipes/Recipes'
import SingleRecipe from './components/SingleRecipe/SingleRecipe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Selected from './components/Selected/Selected'
import './App.css'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/' Component={Recipes} />
          <Route path='/recipe/:id' Component={SingleRecipe} />
          <Route path='/selected' Component={Selected} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App
