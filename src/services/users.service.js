import { get, post, remove, put } from "./api_methods";

async function authenticate(email, password) {
  const params = {
    email,
    password,
  };
  const { data } = await post(`/login`, params);
  return data;
}

async function getUsers() {
  const { data } = await get(`/users`);
  return data;
}
async function registerUsers(params) {
  const { data } = await post(`/users`, params);
  return data;
}
async function updateOneUser(id, params) {
  const { data } = await put(`/users/${id}`, params);
  return data;
}

async function getOneUser(id) {
  const { data } = await get(`/users/${id}`);
  return data;
}

async function deleteOneUser(id) {
  const { data } = await remove(`/users/${id}`);
  return data;
}
export {
  authenticate,
  getUsers,
  registerUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
};
