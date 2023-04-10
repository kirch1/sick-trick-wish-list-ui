import './Card.css';

function Card({trick, deleteTrick}) {
  return(
    <div className='card'>
      <button onClick={() => deleteTrick(trick.id)}>X</button>
      <p>{trick.stance} {trick.name}</p>
      <p>Obstacle: {trick.obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={trick.tutorial}>{trick.tutorial}</a>
    </div>
  )
}

export default Card;
