import axios from'axios'
import {server}from '../config/config'
async function getAllBrands() {
    try{
        const data = await axios.get(`${server}brand`).then(res => res);
        return data.data.data;
    } catch (error) {
        return error
    }
}
async function getAllCategory() {
    try{
        const data = await axios.get(`${server}category`);
        return data.data.data;
    } catch (error) {
        return error
    }
}
export {getAllBrands,getAllCategory}