import axios from'axios'
import {server}from '../config/config'
async function getAllProducs(brand) {
    try{
        const data = await axios.get(`${server}products?brand=${brand}`).then(res => res);
        return data.data.data;
    } catch (error) {
        return error
    }
}
async function createProduct(body) {
    try{
        const data = await axios.post(`${server}products`,body);
        return data;
    } catch (error) {
        return error
    }
}
async function deleteProducts(id) {
    try{
        const data = await axios.delete(`${server}products/${id}`);
        return data;
    } catch (error) {
        return error
    }
}
export {getAllProducs,deleteProducts,createProduct}