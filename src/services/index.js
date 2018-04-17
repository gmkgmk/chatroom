import api from "../api";
import { get, post } from '../utils/request'

export async function register(value) {
  const result = await post(`${api.url}/api/v1/session`, value)
  return result
} 