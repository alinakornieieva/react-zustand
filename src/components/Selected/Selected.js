import { useRecipes } from "../../store"
import { shallow } from 'zustand/shallow'
import Card from "../Card/Card"

const Selected = () => {
    const { selectedRecipes } = useRecipes(state => ({
        selectedRecipes: state.selectedRecipes,
    }), shallow)
    if (selectedRecipes.length < 1) {
        return <h3><center>No selected recipes</center></h3>
    }
    return <>
        <div className="recipes">
            {selectedRecipes.map(item => <Card key={item.id} item={item} />)}
        </div>
    </>
}

export default Selected