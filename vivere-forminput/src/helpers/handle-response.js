
export function handleResponse (response) {
  const data = response.data
  if (response.status >= 400) {
    const error = (data && data.message) || response.statusText
    return Promise.reject(error)
  } else if (response.data.status !== 'ok') {
    const error = data.message ? data : response.statusText
    return Promise.reject(error)
  }

  return data
}

export function handleError (error) {
  if (error.code === 'ECONNABORTED') {
    error.message = 'Network Timeout'
  }

  if (error.response && error.response.data.status !== 'ok') {
    return Promise.reject(error)
  }
  return Promise.reject(error)
}

export const requestOptions = {
  headers: { 'Content-Type': 'application/json' },
  timeout: '8000'
}
