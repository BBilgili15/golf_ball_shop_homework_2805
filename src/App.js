import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import ShopList from './components/ShopList';
import BasketContainer from './components/BasketContainer';

function App() {

  const [golfBalls, setGolfBalls] = useState([
    {brand: 'Titleist',
     name: 'Pro V1',
     cost: 4499,
     imageURL: '	https://acushnet.scene7.com/is/image/titleist/23ProV1-5050-Hero?wid=1200&qlt=75&resMode=sharp2'
    }, 
    {brand: 'Titleist',
     name: 'Pro V1x',
     cost: 4499,
     imageURL: '	https://www.gamolagolf.co.uk/images/titleist-pro-v1x-golf-balls-doz-white-p2987-4588_image.jpg'
    }, 
    {brand: 'Callaway',
     name: 'Chrome Soft',
     cost: 4099,
     imageURL: '	https://www.gamolagolf.co.uk/images/callaway-chrom…soft-x-golf-balls-doz-white-p2980-4578_medium.jpg'
    }, 
    {brand: 'Callaway',
     name: 'Supersoft',
     cost: 2299,
     imageURL: '	https://www.gamolagolf.co.uk/images/callaway-golf-balls-supersoft-doz-p7321-14558_medium.jpg'
    }, 
    {brand: 'Taylormade',
     name: 'TP5',
     cost: 4499,
     imageURL: '	https://www.gamolagolf.co.uk/images/taylormade-golf-balls-tp5-dz-p2931-4495_medium.jpg'
    }, 
    {brand: 'Taylormade',
     name: 'TP5x',
     cost: 4499,
     imageURL: '	https://www.gamolagolf.co.uk/images/taylormade-golf-balls-tp5x-dz-p2945-4521_medium.jpg'
    }, 
    {brand: 'Srixon',
     name: 'Z-Star',
     cost: 4199,
     imageURL: '		https://www.gamolagolf.co.uk/images/srixon-2023-z-…-8-golf-balls-white-dozen-p13697-31338_medium.jpg'
    }, 
    {brand: 'Srixon',
     name: 'AD-333',
     cost: 2799,
     imageURL: '	https://www.gamolagolf.co.uk/images/srixon-ad333-10-golf-balls-dozen-white-p7219-14206_medium.jpg'
    }, 
    {brand: 'Srixon',
     name: 'Soft Feel',
     cost: 2799,
     imageURL: '	https://www.gamolagolf.co.uk/images/srixon-2023-so…13-golf-balls-white-dozen-p13704-31359_medium.jpg'
    }, 
  ])

  const [myBasket, setMyBasket] = useState([])

  const addToBasket = (item) => {
    const newBasket = [...myBasket, item]
    setMyBasket(newBasket)
  }


  const basketTotal = myBasket.reduce((total, ball) => {
    return total += ball.cost
  }, 0)

  let discount = 1;
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    if (event.target.value === 'myballs10') {
      return discount = 0.9 
    } else if (event.target.value === 'myballs20') {
      return discount = 0.8
    } else if (event.target.value === 'myballs30') {
      return discount = 0.7 
    } else if (event.target.value === 'myballs40') {
      return discount = 0.6
    }
  }


  const checkout = () => {
    alert('Thank you for your purchase!')
    const newBasket = []
    setMyBasket(newBasket)
  }

  const clearBasket = () => {
    const newBasket = []
    setMyBasket(newBasket)
  }

  let deliveryCharge = 0;
  const deliveryCost = (price) => {
    deliveryCharge = price;
    console.log(deliveryCharge)
    return deliveryCharge
  }

  // const applyDiscount = (event) => {

  // }

  return (
    <Router>
      <NavBar myBasket={myBasket} basketTotal={basketTotal}/>
      <Routes>
        <Route path='/' element={<ShopList golfBalls={golfBalls} addToBasket={addToBasket} />}></Route>
        <Route path='/my-basket' element={<BasketContainer myBasket={myBasket} basketTotal={basketTotal} handleSubmit={handleSubmit} discount={discount} checkout={checkout} deliveryCost={deliveryCost} deliveryCharge={deliveryCharge} clearBasket={clearBasket}/>}></Route>
        <Route path='/balls/:name' element={<h1>Can't seem to make this render dynamically (see URL)</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
