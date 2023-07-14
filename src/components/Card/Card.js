import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipes } from '../../store'
import { shallow } from 'zustand/shallow'
import './Card.css'

const Card = ({ item }) => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(false)
    const { selectRecipe, selectedRecipes, deleteSelected } = useRecipes(state => ({
        selectRecipe: state.selectRecipe,
        selectedRecipes: state.selectedRecipes,
        deleteSelected: state.deleteSelected
    }), shallow)
    const navigateClick = () => {
        navigate(`/recipe/${item.id}`, { state: { item } })
    }
    useEffect(() => {
        const option = selectedRecipes.filter(s => s.id === item.id).length > 0 ? true : false
        setSelected(option)
    }, [selectedRecipes, deleteSelected])
    const selectClick = () => {
        if (selected) {
            deleteSelected(item.id)
        } else {
            selectRecipe(item)
        }
    }
    const onBtnClick = (e) => {
        e.stopPropagation()
        deleteSelected(item.id)
    }
    return <div className='card' onClick={navigateClick} onContextMenu={selectClick}>
        <img src={item.image_url} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description.substring(0, 100) + '...'}</p>
        {selected && <button onClick={onBtnClick} className='delete-btn'>Delete</button>}
    </div>
}

export default Card