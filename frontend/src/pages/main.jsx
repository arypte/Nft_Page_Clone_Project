import Web3 from 'web3';
import Intro from '../components/Intro';
import { CONTRACT_ABI } from '../web3.config';
import { useEffect, useState } from 'react';
import Nfts from '../components/Nfts';
import { useParams } from 'react-router-dom';
import js from '../nftdata.json';
import Filter from '../components/Filter';

const web3 = new Web3(window.ethereum);

const Main = ({ account }) => {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(1);
  const { col_num } = useParams();
  const contract = new web3.eth.Contract(
    CONTRACT_ABI,
    js[col_num].CONTRACT_ADDRESS
  );

  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();
      // erc-721

      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNft(response);
      setPage(parseInt((parseInt(response) - 1) / 10) + 1);
      // 10 - 1 = 9 / 10 + 1 = 1
      // 31 - 1 = 30 / 10 + 1 = 4
    } catch (error) {
      console.error(error);
    }
  };
  const getMyNft = async () => {
    try {
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();

      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);

  useEffect(() => {
    getMyNft();
  }, [account]);

  return (
    <>
      <Intro
        totalNft={totalNft}
        mintedNft={mintedNft}
        myNft={myNft}
        col_num={col_num}
        //imgSrc={imgSrc}
      />

      <Nfts
        totalNft={totalNft}
        page={page}
        mintedNft={mintedNft}
        col_num={col_num}
        //setImgSrc={setImgSrc}
      />
    </>
  );
};

export default Main;

//화살표 함수 사용이유 gpt가 요새 추세라고 함
