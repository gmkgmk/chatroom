export const get = (url) => {
  let result = fetch(url, {
    // 允许跨域时发出cookie
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    method: 'GET',
  });

  return result.then((response) => response.json());
}



export const post = (url, obj = {}, method = 'POST') => {
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
