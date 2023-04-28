import axios from 'axios';
import { useEffect, useState } from 'react';
import NftCard from './NftCard';
import jsondata from '../nftdata.json';
import Filter from './Filter';

// 수정할것. getnft를 그냥 한번에 다 저장하는걸로. 다만 Total이 아닌 Mint로 하자.
// 그담에 필터사용. 필터 적용

const Nfts = ({ page, mintedNft, col_num }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [check, setCheck] = useState();
  const [nfts, setNfts] = useState();
  const [bool, setBool] = useState(false);
  const [totalNfts, setTotalNfts] = useState();
  const [filterOptions, setFilterOptions] = useState({});
  const js = jsondata[parseInt(col_num)];
  const JSON_URL = js.JSON_URL;

  const getTotalNfts = async () => {
    try {
      if (!mintedNft) return;

      let nftArray = [];

      setNfts();

      for (let i = 0; i < mintedNft; i++) {
        const tokenId = i + 1;

        let response = await axios.get(`${JSON_URL}/${tokenId}.json`);

        nftArray.push({ tokenId, metadata: response.data });
      }
      setTotalNfts(nftArray);

      // 필터 옵션 생성
      const newFilterOptions = createFilterOptions(nftArray);
      setFilterOptions(newFilterOptions);
      setBool(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getNfts = async (p) => {
    try {
      if (!mintedNft) return;

      let nftArray = [];

      setNfts();

      for (let i = 0; i < 10; i++) {
        nftArray.push(totalNfts[i]);
      }
      setNfts(nftArray);
      //console.log(nftArray[0].metadata.image);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);
    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? 'text-white' : 'text-gray-400'
          }`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }

    return pageArray;
  };

  const createFilterOptions = (nfts) => {
    let filterOptions = {};

    nfts.forEach((nft) => {
      nft.metadata.attributes.forEach((attribute) => {
        const { trait_type, value } = attribute;

        if (!filterOptions[trait_type]) {
          filterOptions[trait_type] = new Set();
        }

        filterOptions[trait_type].add(value);
      });
    });

    // 중복 제거를 위해 Set을 Array로 변환
    Object.keys(filterOptions).forEach((key) => {
      filterOptions[key] = Array.from(filterOptions[key]);
    });

    return filterOptions;
  };

  // useEffect(() => {
  //   console.log(nfts);
  // }, [nfts]);

  useEffect(() => {
    getTotalNfts();
  }, [mintedNft]);

  useEffect(() => {
    getNfts(1);
  }, [filterOptions]);

  return (
    <div className="max-w-screen-xl mx-auto pt-4">
      <Filter foption={filterOptions} check={check} bool={bool} />
      <div>{pageComp()}</div>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8">
        {nfts ? (
          nfts.map((v, i) => {
            return (
              <NftCard
                key={i}
                tokenId={v.tokenId}
                metadata={v.metadata}
                mintedNft={mintedNft}
              />
            );
          })
        ) : (
          <div>로딩중입니다...</div>
        )}
      </ul>
    </div>
  );
};

export default Nfts;
