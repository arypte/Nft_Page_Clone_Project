import { FaChessRook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  return (
    <div className="relative bg-gray-800 rounded-2xl pb-4">
      {/* rounded-2xl 밑 깎기 */}
      {/*       {tokenId} {metadata.name} */}

      {parseInt(mintedNft) < tokenId && (
        <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-4xl font-bold">
          Not Minted.
        </div>
      )}
      <img className="rounded-t-2xl" src={metadata.image} alt={metadata.name} />
      <div className="mt-4 text-xl font-bold flex items-center px-4 text-gray-300">
        {metadata.name}
        <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-2 text-black">
          <FaChessRook size={16} />
        </div>
      </div>
      <div className="mt-4 text-2xl px-4 font-bold"># {tokenId}</div>
      <div className="mt-4 text-xl flex justify-end px-4">
        <Link to={`${tokenId}`}>
          <button
            className="px-4 py-2 rounded-xl bg-gray-50 text-gray-950 hover:bg-gray-500"
            disabled={parseInt(mintedNft) < tokenId}
          >
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NftCard;
