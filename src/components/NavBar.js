import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const NavContainer = styled.nav`
  margin: 0;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding-left: 5vw;
  padding-right: 5vw;
  border-bottom: 5px solid black;
  `

const LinkContainer = styled.ul`
  display: flex; 
  justify-content: space-evenly;
  width: 20vw;
  list-style: none;
  text-decoration: none;
`

const ListItem = styled.li`
  text-decoration: none;
  border-radius: 5px;
  padding: 10px;
  color: black;
`



const NavBar = ({myBasket, basketTotal}) => {

  return (
    <NavContainer className='nav-bar'>
      <h1>Shop My Balls</h1>
      <LinkContainer className='nav-container'>
        <Link id='nav-item' to='/'><ListItem>Home</ListItem></Link>
        <Link id='nav-item' to='/my-basket'><ListItem>Basket: £{basketTotal/100}</ListItem></Link>
      </LinkContainer>
    </NavContainer>
  );
}

export default NavBar