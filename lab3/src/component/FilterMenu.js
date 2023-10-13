import { useState } from "react";
import { getAllBrands, getAllCategory } from "../api/brands"
import { Button, Form, Radio } from "react-bootstrap";

async function getdata(type) {
    const labelCall = [
        {index:0,funcall:getAllBrands},
        {index:1,funcall:getAllCategory}
    ]
    const data = await labelCall[type].funcall().then(res => res);
    return data;
} 
const dataBrand =await getdata(0);

const FilterMenu = ({setFilterBrand}) => { 
    
    return <>
    <h4>Filter:Brand</h4>
    <Form>
    <Form.Check
            key={0}
            label="All"
            name="group1"
            type='radio'
            value={0}
            id={`inline-radio-2`}
            onChange={(e) => setFilterBrand(0)}
          /> 
      {dataBrand.map((data) => (
       <Form.Check
        key={data.id}
        label={data.name}
       name="group1"
       value={data.id}
        type='radio'
        id={`inline-radio-2`}
       onChange={(e) => setFilterBrand(e.target.value)}
     >
      
     </Form.Check> 
      ))}
    </Form>
    
    </>
}

export default FilterMenu;