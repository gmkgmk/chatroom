const get = (url) => {
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
export default get