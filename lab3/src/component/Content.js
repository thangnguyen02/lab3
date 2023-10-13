import { Button, Table } from "react-bootstrap";
import { deleteProducts, getAllProducs } from "../api/product";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAllBrands, getAllCategory } from "../api/brands";
const brandData = await getAllBrands();
const categoryData = await getAllCategory();
const Content = ({filterBrand}) => {
  const [data,setData] =useState();
  const handSubmitSearch= (e) =>{
    e.preventDefault();
    const dt =  document.querySelector(".formSearch").value;
   setData(data.filter(d => d.title.includes(dt)));
  }
  useEffect(function checkdata() {
    getAllProducs(filterBrand).then(res =>     setData(res));
  },[filterBrand])
  
    const navigate = useNavigate();

     const handleOnClick = () => {
        navigate(`/product/add`)  
     }
     const handleOnDelete = (id) => {
       deleteProducts(id).then(res => {console.log(res)});
     }
    return <>
    <h3>List of Product</h3>
    <Button onClick={handleOnClick} style={{margin:"20px 0"}}>Add new Product</Button>
    <br></br>
    <form onSubmit={handSubmitSearch}>
    <input placeholder="Enter to search" className="formSearch"></input>
    </form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>(%)</th>
          <th>Brand</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(data => {
            return <tr>
            <td>{data.id}</td>
            <td style={{cursor:"pointer", color:'blue'}}><p >{data.title}</p></td>
            <td>{data.description}</td>
            <td>{data.price}</td>
            <td>{data.discountPercentage}</td>
            <td>{brandData?.find(dt => dt.id === data.brand)?.name}</td>
            <td>{categoryData?.find(dt => dt.id === data.category)?.name}</td>
          
          </tr>
        })}
        
        
      </tbody>
    </Table></>
}

export default Content;