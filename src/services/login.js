import { register, validateLogin } from './api'

export async function queryAccountLogin(params) {
  return register(params)
}

export async function validateAccountLogin() {
  return validateLogin()
} 