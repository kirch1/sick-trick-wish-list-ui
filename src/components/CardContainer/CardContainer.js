import Card from '../Card/Card';
import './CardContainer.css'

function CardContainer({tricks}) {
  
  const cards = tricks.map(trick => <Card trick={trick}/>)

  return(
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;
