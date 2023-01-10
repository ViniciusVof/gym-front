import { get, post } from './api_methods';

async function authenticate(email, password) {
    const params = {
      email,
      password,
    };
    const { data } = await post(`/login`, params);
    return data;
  }

  async function getUsers(){
    const { data } = await get(`/users`);
    return data;
  }
  async function registerUsers(fullname, email, password){
    const { data } = await post(`/users`, {
      fullname,
      email,
      password
    });
    return data;
  }
  
  export { authenticate, getUsers, registerUsers };
  