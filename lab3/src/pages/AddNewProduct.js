import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navigation from "../component/Navigation";
import { getAllBrands, getAllCategory } from "../api/brands";
import { useNavigate } from 'react-router-dom';
import { createProduct } from "../api/product";
const brandData = await getAllBrands();
const categoryData = await getAllCategory();
const AddNewProduct = () => {
    const navigate = useNavigate();
   
    const handleOnClick = () => {
       navigate(`/`)  
    }
    const handleOnSubmit =(event) => {
        event.preventDefault();
        const id =  document.querySelector(".id").value;
        const title =  document.querySelector(".title").value;
        const price =  document.querySelector(".price").value;
        const discount =  document.querySelector(".discount").value;
        const rating =  document.querySelector(".rating").value;
        const stock =  document.querySelector(".stock").value;
        const brand =  document.querySelector(".brand").value;
        const category =  document.querySelector(".category").value;
        const description =  document.querySelector(".description").value;
        createProduct({id,title,price,discount,rating,stock,brand,category,description}).then(res=>  {alert("Tao thanh cong")})
    }
    return <>
    <Navigation/>
    <Container>
    <h3>Create New Product</h3>
    <Form onSubmit={handleOnSubmit} >
        <Row>
            <Col md={6}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>ID</Form.Label>
        <Form.Control value="3" className="id" disabled/>
      </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" required className="title" placeholder="Title" />
      </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control required  type="number" className="price" placeholder="Enter Price" />
      </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Discount</Form.Label>
        <Form.Control required type="text"className="discount" placeholder="Enter Discount" />
      </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Form.Control required  type="number" className="rating" placeholder="Enter rating" />
      </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Stock</Form.Label>
        <Form.Control required type="number" className="stock"placeholder="Enter Stock" />
      </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Brand</Form.Label>
        <Form.Select required  className="brand">
            {brandData?.map(brand  => {
                return <option value={brand.id}>{brand.name}</option>
            })}
        </Form.Select>
      </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Select required className="category">
        {categoryData?.map(category  => {
                return <option value={category.id}>{category.name}</option>
            })}
        </Form.Select>
      </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control required  type="text" className="description" placeholder="Enter description" />
      </Form.Group>
            </Col>
        </Row>
      <Button variant="primary" style={{margin:"0 20px"}} type="submit">
        Submit
      </Button>
      <Button variant="danger"onClick={handleOnClick}>
Back to List 
</Button>
    </Form>
    </Container>
    
    </>

}
export default AddNewProduct;