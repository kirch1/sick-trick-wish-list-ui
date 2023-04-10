import './Card.css';

function Card({trick}) {
  return(
    <div className='card'>
      <p>{trick.stance} {trick.name}</p>
      <p>Obstacle: {trick.obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={trick.tutorial}>{trick.tutorial}</a>
    </div>
  )
}

export default Card;
