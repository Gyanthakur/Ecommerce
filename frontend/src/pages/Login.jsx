import React from "react";
import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { Email } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Linke = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Login = (props) => {

      const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://ecommerce-production-4566.up.railway.app/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });

        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            props.showAlert("Logged in Successfully","success")
            navigate("/");

        }
        else{
            props.showAlert("Invalid details","danger")
            // console.log("invalid")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div>
      <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form onSubmit={handleSubmit}>
                <Input type={Email} placeholder="email"  name="email" id="email" value={credentials.email} onChange={onChange}/>
                <Input placeholder="password" name="password" id="password"  value={credentials.password} onChange={onChange}/>
                {/* <Button>LOGIN</Button> */}
                <Button>LOGIN</Button>
                
                {/* <Link to="/SIGN IN" ><Button>LOGIN</Button></Link> */}
                <Linke>Forgot password</Linke>
                {/* <Linke>CREATE A NEW ACCOUNT</Linke> */}
                <Link to="/Register" ><Linke>CREATE A NEW ACCOUNT</Linke></Link>
            </Form>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Login
