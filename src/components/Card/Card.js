import './Card.css'

const Card = ({ item }) => {
    return <div className='card'>
        <img src={item.image_url} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description.substring(0, 100) + '...'}</p>
    </div>
}

export default Card