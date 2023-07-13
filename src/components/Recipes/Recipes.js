import { useEffect } from "react"
import { useRecipes } from "../../store"
import { shallow } from 'zustand/shallow'
import Card from "../Card/Card"
import './Recipes.css'

const Recipes = () => {
    const { fetchRecipes, loading, error, recipes } = useRecipes(state => ({
        loading: state.loading,
        error: state.error,
        fetchRecipes: state.fetchRecipes,
        recipes: state.recipes
    }), shallow)
    useEffect(() => {
        fetchRecipes()
    }, [])
    if (loading) {
        return <div>loading</div>
    }
    if (error) {
        return <div>error</div>
    }
    return <div className="recipes">
        {recipes.map(item => <Card key={item.id} item={item} />)}
    </div>
}

export default Recipes