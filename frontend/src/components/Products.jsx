import styled from "styled-components"
import { popularProducts } from "../data"
// import Footer from "./Footer"
import Product from "./Product"
// import Navbar from "./Navbar"
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
`
const Products = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id} />
        ))}
        {/* <Footer/> */}
      </Container>
    </div>
  )
}

export default Products
