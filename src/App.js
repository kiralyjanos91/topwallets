import './App.css';
import React, { useEffect , useState } from "react"
import { Routes , Route , useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './navbar/navbar';
import Home from './home/home';
import Wallets from './wallets/wallets';
import Wallet from './wallet/wallet';
import Coins from './coins/coins';
import Coin from './coin/coin';
import Footer from './footer/footer';
import { Container } from 'react-bootstrap';
import NewsList from './newslist/newslist';

export default function App() {
  const [ coinList , setCoinList ] = useState("")
  const location = useLocation()

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'RapidApi Key',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
      }
    };
    
    fetch('https://coingecko.p.rapidapi.com/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cusd-coin%2Cbinancecoin%2Cripple%2Cbinance-usd%2Ccardano%2Csolana%2Cdogecoin%2Cpolkadot%2Cdai&vs_currencies=usd', options)
      .then(response => response.json())
      .then(response => setCoinList(response))
      .catch(err => console.log(err)) 
  },[])

  useEffect(()=>{
    document.documentElement.scrollTo(0, 0);
  },[location.pathname])
  
  return (
    <Container className="App" fluid>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:coinId" element={<Coin />} />
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/wallets/:walletName" element={<Wallet />} />
        <Route path="/coins" element={<Coins coinlist={coinList} />} />
        <Route path="/news/:page" element={<NewsList />} />
      </Routes>
      <Footer />
    </Container>
  );
}

