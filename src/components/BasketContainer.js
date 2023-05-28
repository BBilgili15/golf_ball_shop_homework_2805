import React from 'react'
import styled from 'styled-components'

const BasketSection = styled.section`
  margin: 5vh 10vw;
  border: 1px solid black;
  padding: 0 10vw;
`
const TotalAndCheckout = styled.div`
  display: flex;
  /* margin-left: 2vw; */
  align-items: center;
`

const TitleClearContainer = styled.div`
  display: flex;
  /* margin-left: 2vw; */
  align-items: center;
`

const MyButton = styled.button`
  height: 3vh;
  margin-left: 2vw;
  background-color: orange;
  border: none;
  cursor: pointer;
`

const ClearButton = styled.button`
  height: 3vh;
  margin-left: 2vw;
  /* background-color: orange; */
  /* border: none; */
  cursor: pointer;
`
const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30vw;
  height: 5vh;
  padding: 1vh 0;
`

const RadioLabel = styled.label`
  font-size: 10px;
`

const BasketContainer = ({myBasket, basketTotal, handleSubmit, discount, checkout, deliveryCost, deliveryCharge, clearBasket, totalPrice}) => {

  const basketContent = myBasket.map((ball, index) => {
    return (
      <li key={index}>
        <p>{ball.brand}: {ball.name} - £{ball.cost/100}</p>
      </li>
    )
  })

  console.log(deliveryCharge)

  return (
    <BasketSection>
      <TitleClearContainer>
        <h2>Your Basket</h2>
        <ClearButton onClick={clearBasket}>Clear</ClearButton>
      </TitleClearContainer>
      <ul>
        {basketContent}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Discount Code'/>
        <button type='submit'>Apply</button>
      </form>
      <RadioContainer>
        <RadioLabel>Free Delivery (3-5 days)
          <input type='radio' name='delivery' htmlFor='delivery' defaultChecked onChange={() => {deliveryCost(0)}}/>
        </RadioLabel>
        <RadioLabel>Next Day Delivery (£5.00)
          <input type='radio' name='delivery' htmlFor='delivery' onChange={() => {deliveryCost(5)}}/>
        </RadioLabel>
      </RadioContainer>
      <TotalAndCheckout>
        <p>Total: £{(deliveryCharge + (basketTotal/100) * discount)}</p>
        <MyButton onClick={checkout}>Checkout</MyButton>
      </TotalAndCheckout>
    </BasketSection>
  );
}

export default BasketContainer