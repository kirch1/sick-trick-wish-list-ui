const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }else {
        return response.json();
      }
    })
}

export default getTricks;
