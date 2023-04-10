import './Card.css'

function Card({trick}) {
  return(
    <div className='card'>
      <p>{trick.stance} {trick.name}</p>
      <p>Obstacle: {trick.obstacle}</p>
      <p>Link to Tutorial: {trick.tutorial}</p>
    </div>
  )
}

export default Card;
