import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api'

const getAll = (resource) => {
  const request = axios.get(`${baseUrl}/${resource}`)
  return request.then(response => response.data)
}

const create = (newObject, resource) => {
  const request = axios.post(`${baseUrl}/${resource}`, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }                      