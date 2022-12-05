import decode from 'jwt-decode';
import api from './api';

export async function signIn (email, password) {
  const result  = await api.post('user/login', {
    email,
    password
  })
  localStorage.setItem('auth_token', result.data.token)
  localStorage.setItem('auth_user', JSON.stringify(result.data.user))
  return result.data.token
}

export function signOut () {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('auth_user')
}

export function isSignedIn () {
  const token = localStorage.getItem('auth_token');
  const user = localStorage.getItem('auth_user');
  if (!token) return {isLoggedIn: false,  decoded: false} 

  try {
    const decoded = decode(token)
    const { exp: expiration } = decode(token)
    const isExpired = !!expiration && Date.now() > expiration * 1000

    if (isExpired)  
      return {isLoggedIn: false,  decoded: false} 
                    
    return {isLoggedIn: true,  decoded, user}
  } catch (err) {   
    return {isLoggedIn: false,  decoded: false} 
  }
}

export default (userGroup) =>  async (to, from, next) => {
    const { isLoggedIn, decoded } = isSignedIn()
    if(isLoggedIn) {
      if(decoded.userGroup == 'Super') next();
      else if(userGroup == 'Comum') next();
      else if(userGroup == 'Premium' && decoded.userGroup == userGroup) next();
      else next('/')
    } else{
      next('/login');
    }      
}
