const BASE_URL = '/api/cars';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(cr) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(cr)
  }).then(res => res.json());
}

export function update(cr) {
  return fetch(`${BASE_URL}/${cr._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(cr)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}