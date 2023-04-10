const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if(!response.ok) {
        throw new Error(response)
      }else {
        return response.json();
      }
    })
    .catch(error => console.log(error));
}

export default getTricks;
