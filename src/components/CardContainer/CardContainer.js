import Card from '../Card/Card';
import './CardContainer.css';

function CardContainer({tricks, deleteTrick}) {
  
  const cards = tricks.map(trick => <Card key={trick.id} trick={trick} deleteTrick={deleteTrick}/>);

  return(
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;
