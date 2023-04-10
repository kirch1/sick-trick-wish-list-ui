import { useState } from 'react';
import './Form.css';

function Form({addTrick}) {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  return(
    <form>
      <select value={stance} onChange={e => setStance(e.target.value)}>
        <option value=''>Choose Your Stance</option>
        <option value='regular'>Regular</option>
        <option value='switch'>Switch</option>
      </select>
      <input value={name} type="text" placeholder="Name of Trick" onChange={e => setName(e.target.value)}/>
      <select value={obstacle} onChange={e => setObstacle(e.target.value)}>
        <option value=''>Choose Your Obstacle</option>
        <option value='flatground'>Flatground</option>
        <option value='ledge'>Ledge</option>
        <option value='rail'>Rail</option>
        <option value='stairs'>Stairs</option>
        <option value='pool'>Pool</option>
      </select>
      <input value={tutorial} type="text" placeholder="Link to tutorial" onChange={e => setTutorial(e.target.value)}/>
      <button>Send It!</button>
    </form>
  )
}

export default Form;
