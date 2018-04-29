import request from '../utils/request';
import global from './params';
const { url } = global

export async function register(params) {
  return request(`${url}/api/v1/session`, {
    method: 'POST',
    body: params
  });
}
