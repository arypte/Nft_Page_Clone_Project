//import Filter from '../components/Filter';

import { useState } from 'react';

const RealMain = ({ account }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-gray-800 pt-10 min-h-screen  flex-col justify-center items-center">
      <div className="relative m-4 bg-gray-500 h-72 flex items-center justify-center rounded-xl ">
        <div className="text-white text-5xl">Hello, NFT!</div>
        <button
          className="absolute bottom-1 right-3 rounded-xl text-gray-850 hover:text-white text-gray-200"
          onClick={onToggle}
        >
          About, Project
        </button>
      </div>

      {toggle && (
        <div className="m-20 bg-gray-500  h-72 flex items-center justify-center rounded-xl ">
          <div className="text-white text-5xl" onClick={onToggle}>
            README.MD
          </div>
        </div>
      )}
    </div>
  );
};

export default RealMain;

//화살표 함수 사용이유 gpt가 요새 추세라고 함
