import { useEffect } from "react"
import { useRecipes } from "../../store"
import { shallow } from 'zustand/shallow'
import Card from "../Card/Card"
import Loader from "../Loader"
import './Recipes.css'

const Recipes = () => {
    const { fetchRecipes, loading, error, recipes, moreLoading, moreError, fetchMoreRecipes } = useRecipes(state => ({
        loading: state.loading,
        error: state.error,
        fetchRecipes: state.fetchRecipes,
        recipes: state.recipes,
        start: state.start,
        end: state.end,
        fetchMoreRecipes: state.fetchMoreRecipes,
        moreLoading: state.moreLoading,
        moreError: state.moreError
    }), shallow)
    useEffect(() => {
        fetchRecipes()
    }, [])
    if (loading) {
        return <Loader />
    }
    if (error || moreError) {
        return <h2 style={{ color: 'red' }}><center>Something went wrong</center></h2>
    }
    return <>
        <div className="recipes">
            {recipes.map(item => <Card key={item.id} item={item} />)}
        </div>
        <div style={{ textAlign: 'center' }}>
            <button disabled={moreLoading} onClick={fetchMoreRecipes} className="load-more">Load more</button>
        </div>
    </>
}

export default Recipes