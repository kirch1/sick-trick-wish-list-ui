import './Form.css'

function Form() {

  return(
    <form>
      <select name="stance">
        <option value=''>Choose Your Stance</option>
        <option value='regular'>Regular</option>
        <option value='switch'>Switch</option>
      </select>
      <input type="text" name="name" placeholder="Name of Trick" />

      <select name="obstacle">
        <option value=''>Choose Your Obstacle</option>
        <option value='flatground'>Flatground</option>
        <option value='ledge'>Ledge</option>
        <option value='rail'>Rail</option>
        <option value='stairs'>Stairs</option>
        <option value='pool'>Pool</option>
      </select>
      <input type="text" name="tutorial" placeholder="Link to tutorial" />
      <button>Send It!</button>
    </form>
  )
}

export default Form
