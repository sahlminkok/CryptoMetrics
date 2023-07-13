import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCryptos, searchCryptos } from '../redux/cryptos/cryptosSlice';
import style from '../styles/CryptosList.module.css';
import arrow from '../assets/arrow.svg';
// import crypt from '../assets/crypto.svg';

const CryptosList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredCryptos } = useSelector((store) => store.cryptos);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    dispatch(getCryptos());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    dispatch(searchCryptos(keyword));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            className={style.search}
            value={searchKeyword}
            onChange={handleSearchChange}
          />
          <button type="submit" className={style.searchBtn}>
            Search
          </button>
        </form>
      </div>
      <div className={style.cryptos}>
        {filteredCryptos.map((crypto) => (
          <div key={crypto.id} className={style.crypto}>
            <button type="button" className={style.arrow} onClick={() => navigate(`/${crypto.id}`)}>
              <img src={arrow} alt="Arrow" />
            </button>
            <div className={style.cryptoInfo}>
              <h2>{crypto.symbol}</h2>
              <p>
                $
                <span>{Number(crypto.priceUsd).toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CryptosList;
