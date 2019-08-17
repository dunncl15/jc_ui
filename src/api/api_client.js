const url = 'http://localhost:8005/api/systemusers';
const headers = {
  'content-type': 'application/json',
};

const handleResponse = response => {
  if (response.ok) {
    return response.json();
  }
  return response.text().then(text => {
    return Promise.reject({ text, status: response.status });
  });
};

export function get() {
  return fetch(`${url}`, {
    method: 'GET',
  }).then(handleResponse);
}

export function post(data) {
  return fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  }).then(handleResponse);
}

export function put(path, data) {
  return fetch(`${url}/${path}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers,
  }).then(handleResponse);
}

export function del(path) {
  return fetch(`${url}/${path}`, {
    method: 'DELETE',
  }).then(handleResponse);
}
