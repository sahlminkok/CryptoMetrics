import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import backArrow from '../assets/arrowLeft.svg';
import style from '../styles/Details.module.css';

const Details = () => {
  const { id } = useParams();
  const { filteredCryptos } = useSelector((store) => store.cryptos);
  const crypto = filteredCryptos.find((crypto) => crypto.id === id);

  if (!crypto) {
    return <h2>Coin not found</h2>;
  }

  return (
    <div>
      <div className={style.title}>
        <div className={style.backArrow}>
          <Link to="/">
            <img src={backArrow} alt="back" />
          </Link>
        </div>
        <div className={style.name}>
          <h1>{crypto.name}</h1>
          <p>{crypto.symbol}</p>
        </div>
      </div>
      <div className={style.details}>
        <p className={style.card}>
          <span>Rank:</span>
          <span>{Number(crypto.rank)}</span>
        </p>
        <p className={style.card}>
          <span>Supply:</span>
          <span>{Number(crypto.supply)}</span>
        </p>
        <p className={style.card}>
          <span>Max Supply:</span>
          <span>{Number(crypto.maxSupply)}</span>
        </p>
        <p className={style.card}>
          <span>Market Cap:</span>
          <span>
            $
            {Number(crypto.marketCapUsd).toFixed(2)}
          </span>
        </p>
        <p className={style.card}>
          <span>Volume 24h:</span>
          <span>{Number(crypto.volumeUsd24Hr).toFixed(2)}</span>
        </p>
        <p className={style.card}>
          <span>Price:</span>
          <span>
            $
            {Number(crypto.priceUsd).toFixed(6)}
          </span>
        </p>
        <p className={style.card}>
          <span>Change Percentage:</span>
          <span>
            {Number(crypto.changePercent24Hr).toFixed(2)}
            %
          </span>
        </p>
      </div>
    </div>
  );
};

export default Details;
