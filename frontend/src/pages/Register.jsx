import styled from "styled-components"
import { mobile } from "../responsive";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = (props) => {

  const [credentials, setCredentials] = useState({name:"", email: "", password: "",cpassword: ""}) 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const {name,email,password}=credentials;
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name,email,password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken); 
          navigate("/");
          props.showAlert("Account created Successfully","success")

      }
      else{
          props.showAlert("Invalid Credientials","danger")
      }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }





  return (
    <div>
      {/* <Navbar/> */}
      <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="name"  name="name" id="name" onChange={onChange} required/>
                <Input placeholder="last name" name="lastname" id="lastname" onChange={onChange} required/>
                <Input placeholder="username" name="username" id="username" onChange={onChange} required/>
                <Input placeholder="email" name="email" id="email" onChange={onChange} required/>
                <Input placeholder="password" name="password" id="password" onChange={onChange} required/>
                <Input placeholder="confirm password" name="cpassword" id="cpassword" onChange={onChange} required/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                {/*  disabled={note.title.length<5 || note.description.length<5}  */}
                <Button disabled={credentials.password!==credentials.cpassword} >CREATE</Button>
                {/* <Link to="/" ><Button >CREATE</Button></Link> */}

            </Form>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register
