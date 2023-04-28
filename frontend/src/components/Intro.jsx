/*
const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;
const Intro = () => {
  return (
    
    <div className="bg-gradient-to-b from-transparent to-red-400 pt-10 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative ">
          <img className="w-40 h-40 rounded-full z-10" src={imgSrc} alt="NFT" />
          <div className="absolute top-0 w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
*/

import { FaChessRook } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import js from '../nftdata.json';

const Intro = ({ totalNft, mintedNft, myNft, col_num }) => {
  const jsondata = js[parseInt(col_num)];

  const imgSrc = jsondata.IMAGE_URL;

  return (
    <div className="bg-gradient-to-b from-transparent to-gray-700 pt-10">
      <div className="mx-auto max-w-screen-xl ">
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-9xl truncate opacity-40">
            {jsondata.Name}
          </div>
          <div className="w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>

        <div className="mt-4 text-2xl font-bold flex items-center">
          {jsondata.Name}
          <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
            <FaChessRook size={16} />
          </div>
        </div>

        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-black ml-2">{jsondata.CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">{jsondata.Desc}</div>
        <div className="py-4 text-center flex">
          <div>
            <div className="font-bold">{totalNft}</div>
            <div className="text-gray-300">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-gray-300">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div className="text-gray-300">내 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
