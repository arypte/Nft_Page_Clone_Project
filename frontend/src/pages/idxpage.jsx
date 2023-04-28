//import Filter from '../components/Filter';

import { Link } from 'react-router-dom';
import js from '../nftdata.json';

const Idxpage = () => {
  return (
    <div className="bg-gray-800 min-h-screen ">
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="text-5xl pt-10">BLOCK CHAIN SCOOL3 COLLECTIONS</div>
        <div className="text-xl pt-10"> {js.length}개의 컬렉션</div>
      </div>
      <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
        {js.map((v, i) => {
          return (
            <Link to={`/collection/${i}`}>
              <li className="bg-gray-900 w-72 h-48 rounded-xl">
                <div className="bg-yellow-100 w-full h-2/3 object-cover rounded-t-xl">
                  <img
                    key={i}
                    src={`${v.IMAGE_URL}`}
                    alt={`${v.Name}`}
                    className="h-full w-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="text-xl font-bold mt-2 mx-2 line-clamp-2">
                  {v.Name}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Idxpage;

//화살표 함수 사용이유 gpt가 요새 추세라고 함
