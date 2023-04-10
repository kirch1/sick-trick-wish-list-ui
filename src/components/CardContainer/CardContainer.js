import Card from '../Card/Card';
import './CardContainer.css';

function CardContainer({tricks}) {
  
  const cards = tricks.map(trick => <Card key={trick.id} trick={trick}/>);

  return(
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;
