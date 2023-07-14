import { Navigate, useNavigate } from 'react-router-dom'
import './Card.css'

const Card = ({ item }) => {
    const navigate = useNavigate()
    const handleClick = (e) => {
        if (e.type === 'click') {
            console.log('Left click');
            navigate(`/recipe/${item.id}`, { state: { item } })
        } else if (e.type === 'contextmenu') {
            console.log('Right click');
        }
    };
    return <div className='card' onClick={handleClick}>
        {/* <NavLink > */}
        <img src={item.image_url} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description.substring(0, 100) + '...'}</p>
    </div>
    {/* </NavLink> */ }
}

export default Card