import React from 'react'
import './Coin.css'

const Coin = ({image,name,price,pricechange,marketcap}) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 coin col-sm-6 text-center">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                    <p className="coin-price">Rs.{price}</p>
                   
                    {pricechange<0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                    )
                }
                
                </div>
                <div className='col-md-4 d-none d-md-block text-center'>
                <p className="coin-marketcap">
                    Mkt Cap: Rs.{marketcap.toLocaleString()}
                </p>
                </div>
                <hr className='hr'/>
            </div>
            
        </div>
    )
}

export default Coin
