import React from 'react'
import styled from 'styled-components'
import {Search ,ShoppingCartOutlined} from "@material-ui/icons"
import { Badge } from "@material-ui/core";
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Register from '../pages/Register';
//style
const Container = styled.div`
height:-30px;
background-color:LightGray;
`
const Wrapper = styled.h1`
padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Left = styled.h1`
flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.div`
font-size: 14px;
  cursor: pointer;
`
const SearchContainer=styled.div`
border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input=styled.input`
border: none;
`

const Center = styled.h1`
flex: 1;
  text-align: center;
`
const Logo=styled.h1`
font-weight: bold;
font-size: 30px;
color:brown;
`   

const Right = styled.h1`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem=styled.div`
font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={()=>{navigate('/')}}>E-Commerce</Logo>
        </Center>
        <Right>
          <MenuItem  onClick={()=>{navigate('/register')}}>
         REGISTER
          </MenuItem>
          
          <MenuItem  onClick={()=>{navigate('/login')}}>  SIGN IN</MenuItem>
         
          <MenuItem>
            <Badge badgeContent={4} color="primary" onClick={()=>{navigate('/cart')}}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;



