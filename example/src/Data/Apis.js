import axios from 'axios';


const basePath= 'https://localhost:44385/api/'

export async function get_products(data){

   return await axios.post(basePath+'Product/GetValues',data);
}