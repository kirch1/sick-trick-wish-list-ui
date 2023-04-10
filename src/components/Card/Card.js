import './Card.css';

function Card({trick, deleteTrick}) {
  return(
    <div className='card'>
      <p>{trick.stance} {trick.name}</p>
      <p>Obstacle: {trick.obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={trick.tutorial}>{trick.tutorial}</a>
      <button onClick={() => deleteTrick(trick.id)}>X</button>
    </div>
  )
}

export default Card;
