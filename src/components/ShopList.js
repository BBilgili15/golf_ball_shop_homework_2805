import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ListContainer = styled.ul`
  margin: 5vh 0;
  /* background-color: lightpink; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-right: 2vw;
`

const ListItem = styled.li`
  list-style: none;
  height: 25vh;
  /* background-color: lightblue; */
  margin-bottom: 5vh;
  margin-left: 1vw;
  margin-right: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: black;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10vw;
  color: black;
  /* background-color: lightgray; */
`

const InfoText = styled.p`
  margin: 1vh;
  color: black;
`

const BallImage = styled.img`
  height: 20vh;
  margin-left: 2vw;
`

const MyButton = styled.button`
  height: 3vh;
  margin-left: 2vw;
  background-color: orange;
  border: none;
  cursor: pointer;
`

const ShopList = ({golfBalls, addToBasket}) => {

  

  const golfBallItems = golfBalls.map((ball, index) => {
    return (
      <ListItem key={index}>
        <InfoContainer>
          <Link id='nav-item' to='/balls/:index'>
          {/* how do I dynamically make a route within here? The 'to' route renders literally */}
            <InfoText>{ball.brand}</InfoText>
            <InfoText>{ball.name}</InfoText>
          </Link>
          <InfoText>£{(ball.cost/100)}</InfoText>
          <MyButton onClick={() => {addToBasket(ball)}} >Add to Basket</MyButton>
        </InfoContainer>
        <BallImage src={ball.imageURL}/>
      </ListItem>
    )
  })


  return (
    <ListContainer>
      {golfBallItems}
    </ListContainer>
  );
}

export default ShopList