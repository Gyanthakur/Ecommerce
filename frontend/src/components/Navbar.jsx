import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react.

import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';



// npm i styles-components 

const Container = styled.div`
  height: 60px;
  background-color: cyan;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const MoreOp = styled.div`
border: 0.5px solid lightgray;
display: flex;
// background-color: black;
align-items: center;
margin-left: 25px;
padding: 5px;
`;



const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const navigate=useNavigate();
  function handlechange(event)
  {
    //  console.log(event.target.value)
     navigate(`${event.target.value}`)
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language><b>HOME</b></Language> */}
          <Link to="/" ><Language><b>HOME</b></Language></Link>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:"gray", fontSize:16}} />
          </SearchContainer>

          {/* <MenuItem>PRODUCT</MenuItem>  */}
          
          {/* <Link to="/Cart" ><MenuItem>cart</MenuItem></Link> */}
        </Left>

          <MoreOp>
            <select onChange={handlechange} name="" id="">
              <option value="/"></option>
              <option value="/">HOME</option>
              <option value="/Cart">CART</option>
              <option value="/Product">PRODUCT</option>
              <option value="/ProductList">PRODUCTLIST</option>
              {/* <option value="/">Home</option> */}
            </select>
          </MoreOp>



        {/* <moreOp>
            <select>
             <option value="">gyan</option>
             <option value="">gyan</option>
             <option value="">gyan</option>
            </select>
            
          </moreOp> */}
        <Center><Logo>GAMA</Logo></Center>
        <Right>

          {/* <MenuItem>REGISTER</MenuItem> */}
          <Link to="/REGISTER" ><MenuItem>REGISTER</MenuItem></Link>
          {/* <MenuItem>SIGN IN</MenuItem> */}
          <Link to="/LOGIN" ><MenuItem>SIGN IN</MenuItem></Link>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
