const post = (url, obj = {}, method = 'POST') => {
  const defaultOptions = {
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    method,
    body: JSON.stringify(obj)
  };
  return fetch(url, defaultOptions).then((response) => response.json())
};

export default post