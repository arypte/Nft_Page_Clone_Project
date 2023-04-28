import { FaChessRook } from 'react-icons/fa';
import { BiWallet } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Header = ({ account, setAccount }) => {
  const [coinPrice, setCoinPrice] = useState();

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        'https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC'
      );

      setCoinPrice([
        { symbol: 'BTC', price: response.data[0].trade_price },
        { symbol: 'ETH', price: response.data[1].trade_price },
        { symbol: 'MATIC', price: response.data[2].trade_price },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold">
      <Link to="/">
        <div className="flex items-center text-main">
          <FaChessRook size={28} />
          <div className="text-2xl">Ble-Chess</div>
        </div>
      </Link>
      <Link to="/collection">
        <div className="flex items-center text-gray-400">
          <div className="text-xl">Collection</div>
        </div>
      </Link>
      <div className="flex items-center mr-20">
        {coinPrice && (
          <ul className="flex text-gray-400 text-sm mr-20">
            {coinPrice.map((v, i) => {
              return (
                <li key={i} className="ml-2">
                  {v.symbol}: ₩{v.price.toLocaleString()}
                </li>
              );
            })}
          </ul>
        )}
        {account ? (
          <div className="flex items-center p-2 bg-gray-800 rounded-full ml-4">
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <AiFillHeart />
            </div>
            <div className="ml-1">
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          </div>
        ) : (
          <button
            className="flex items-center p-2 bg-gray-800 rounded-full ml-4"
            onClick={onClickAccount}
          >
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BiWallet />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
