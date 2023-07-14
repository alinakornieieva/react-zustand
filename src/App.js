import Recipes from './components/Recipes/Recipes'
import SingleRecipe from './components/SingleRecipe/SingleRecipe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Recipes} />
        <Route path='/recipe/:id' Component={SingleRecipe} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
