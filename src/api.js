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

const postTrick = (newTrick) => {
  return fetch('http://localhost:3001/api/v1/tricks',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTrick)
  })
  .then(response => {
    if(!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }else {
      return response.json();
    }
  })
}

const deleteTrick = (id) => {
  return fetch('http://localhost:3001/api/v1/tricks/' + id, {method: 'DELETE'})
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }else {
        return response.json();
      }
    })
}

export { getTricks, postTrick, deleteTrick };
