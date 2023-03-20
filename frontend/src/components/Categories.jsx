import styled from "styled-components"
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
// import Navbar from "./Navbar";

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>
      {/* <Navbar/> */}
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
