import { get } from './api_methods';

async function getTeachers(){
  const { data } = await get(`/teachers`);
  return data;
}
  
  export { getTeachers };
  