import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/get'

const getAll = (table) => {
  const request = axios.get(`${baseUrl}/${table}`)
  return request.then(response => response.data)
}

const create = (newObject, table) => {
  const request = axios.post(`${baseUrl}/${table}`, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }                      